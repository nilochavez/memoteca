
import { AbstractControl } from "@angular/forms";

export function maiusculoValidator(control: AbstractControl) {
  const username = control.value as string;
  if(username !== username?.toUpperCase()) {
      return { maiusculo: true };
  } else
  return null;
}
