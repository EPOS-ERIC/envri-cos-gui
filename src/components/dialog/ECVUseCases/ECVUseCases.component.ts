import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../baseDialogService.abstract';
import { ConfirmationDataIn } from '../confirmationDialog/confirmationDialog.component';
import { ECVUseCasesService } from 'services/ecvUseCases.service';

@Component({
  selector: 'app-ecv-use-cases-dialog',
  templateUrl: './ECVUseCases.component.html',
  styleUrls: ['./ECVUseCases.component.scss'],
})
export class ECVUseCasesComponent implements OnInit {
  public ecvUseCases: ECVUseCase[] = [];
  public selectedExample: ECVUseCase | null = null;
  public title = 'ECV Use Cases';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData<ConfirmationDataIn, boolean>,
    private readonly ecvUseCasesService: ECVUseCasesService,
  ) {
  }

  public ngOnInit(): void {
    this.ecvUseCasesService.examples$.subscribe({
      next: (examplesData: ECVUseCase[]) => {
        this.ecvUseCases = examplesData;
        if (this.ecvUseCases.length > 0) {
          this.selectedExample = this.ecvUseCases[0];
        }
      },
      error: (error: unknown) => {
        console.error('Error fetching scientific examples:', error);
      },
    });
  }

  public selectUseCase(useCase: ECVUseCase): void {
    this.selectedExample = useCase;
  }
}

export interface ECVUseCase {
  ECV: string;
  title: string;
  description: string;
  listOfServices: string[];
  sharingLinkUrl: string;
}

export interface ECVUseCaseDataType {
  confirmButtonHtml: string;
  confirmButtonCssClass: string;
}
