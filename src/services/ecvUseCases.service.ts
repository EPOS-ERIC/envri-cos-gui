/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-floating-promises */

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserNotificationService } from 'components/userNotifications/userNotifications.service';
import { ECVUseCase } from 'components/dialog/ECVUseCases/ECVUseCases.component';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root',
})


export class ECVUseCasesService {
  // Live credentials obtained during build, from gitlab variables.
  private readonly GITLAB_API_USE_CASES_URL = environment.gitlabApiEcvUseCasesUrl;
  private examplesSubject = new BehaviorSubject<ECVUseCase[]>([]);
  public examples$ = this.examplesSubject.asObservable();

  constructor(
    private readonly http: HttpClient,
    private readonly userNotificationService: UserNotificationService,

  ) {
    this.fetchScientificExamplesFromGitLab();
  }

  getscientificExamples(): Observable<object> {
    return this.http.get(this.GITLAB_API_USE_CASES_URL).pipe(
      catchError((error) => {
        this.userNotificationService.sendErrorNotification(
          'Error fetching steps from GitLab API.',
          6000,
        );
        return throwError(error);
      })
    );
  }

  private fetchScientificExamplesFromGitLab(): void {
    this.getscientificExamples().subscribe({
      next: (response: ECVUseCase[]) => {
        try {
          // Directly map the response if it's already an array
          const examples = response.map((ecvUseCase) => ({
            ECV: ecvUseCase.ECV,
            title: ecvUseCase.title,
            description: ecvUseCase.description,
            listOfServices: ecvUseCase.listOfServices,
            sharingLinkUrl: ecvUseCase.sharingLinkUrl,
          }));
          this.examplesSubject.next(examples);
        } catch (error) {
          console.error('Error processing response:', error);
        }
      },
      error: (error) => {
        console.error('Error fetching examples:', error);
      },
    });
  }
}

