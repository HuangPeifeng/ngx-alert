import { ngxAlertOpen, ngxAlertClose } from 'src/main';
import { Subject, Subscription } from 'rxjs';

export interface NgxAlertOutput {
  ngxTitle: string;
  ngxMessage: string;
  ngxType: ngxAlertType;
  ngxOption: NgxAlertOption;
  closeEvent?;
}

export interface NgxAlertOption {
  backgroundColor?: string;
  submitBtnColor?: string;
  closeBtnColor?: string;
}

export type ngxAlertType = 'success' | 'error' | 'confirm';

export function ngxAlert(
  ngxTitle: string,
  ngxMessage: string,
  ngxType: ngxAlertType,
  ngxOption?: NgxAlertOption
) {
  let $sub: Subscription;

  ngxAlertOpen.next({
    ngxTitle: ngxTitle,
    ngxMessage: ngxMessage,
    ngxType: ngxType,
    ngxOption: ngxOption
  });

  const result = new Subject<any>();
  $sub = ngxAlertClose.subscribe(res => {
    $sub.unsubscribe();
    result.next(res);
  });
  return result;
}
