import { SimpleECV } from 'components/ecvFilter/ecvFilter.component';

export class SimpleECVs implements SimpleECV {

  private constructor(
    public readonly name: string,
    public readonly uri: string,
    public isSelected: boolean = false,
  ) { }

  /**
   * Factory method
   */
  public static make(
    name: string,
    uri: string,
  ): SimpleECV {
    return new SimpleECVs(
      name.trim(),
      uri,
      false,
    );
  }

}

