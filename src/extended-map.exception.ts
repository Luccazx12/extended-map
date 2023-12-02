import { ExceptionBase } from "@luccazx12/exceptions-base";

export class ExtendedMapException extends ExceptionBase {
  public readonly code: string = "EXTENDED_MAP_EXCEPTION";

  constructor(message: string) {
    super({ message });
  }
}
