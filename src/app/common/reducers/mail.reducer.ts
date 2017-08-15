import { Action } from '@ngrx/store';
import * as authActions from 'app/common/actions/auth.actions';
import { MailInboxMockData } from "app/common/reducers/mail-mock";

interface IMailState {
  inbox: {
    cols: Array<any>;
    data: Array<any>;
  };
  inboxFilterTab: string;
}
const initialState: IMailState = {
  inbox: MailInboxMockData,
  inboxFilterTab: ''
};

// { name: 'Last 30 Days' },
// { name: 'Last 60 Days' },
// { name: 'Last 90 Days' },
// { name: 'All' },

export default (state = initialState, action): IMailState => {
  switch (action.type) {
    case `INBOX_FILTER_CHANGE_TO_${action.payload}`:

      let nextStateData: any;

      switch(action.payload) {
        case 'Last 30 Days':
          nextStateData = initialState.inbox.data.slice(0, 10)
          break;
        case 'Last 60 Days':
          nextStateData = initialState.inbox.data.slice(0, 6)
          break;
        case 'Last 90 Days':
          nextStateData = initialState.inbox.data.slice(0, 3)
          break;
        case 'All':
          nextStateData = initialState.inbox.data
          break;
      }
      return {
        ...state,
        inbox: {
          cols: [...state.inbox.cols],
          data: nextStateData,
        },

        inboxFilterTab: action.payload
      };

    case 'ADD_MAIL_INBOX_DATA':
      return {
        ...state,
        inbox: action.payload
      };

    case authActions.LOGOUT:
      return Object.assign({}, initialState);

    default:
      return state;
  }
};
