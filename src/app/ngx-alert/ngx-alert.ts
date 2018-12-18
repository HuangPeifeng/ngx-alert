import { Subject, Subscription } from 'rxjs';
import { NgxAlertModule } from '.';

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
): Promise<any> {
  let $sub: Subscription;
  NgxAlertModule.ngxAlertOpen.next({
    ngxTitle: ngxTitle,
    ngxMessage: ngxMessage,
    ngxType: ngxType,
    ngxOption: ngxOption
  });

  return new Promise<any> ((resolve, reject) => {
    $sub = NgxAlertModule.ngxAlertClose.subscribe(res => {
      $sub.unsubscribe();
      resolve(res);
    });
  });

  // const result = new Subject<any>();
  // $sub = NgxAlertModule.ngxAlertClose.subscribe(res => {
  //   $sub.unsubscribe();
  //   result.next(res);
  // });
  // return result;
}
