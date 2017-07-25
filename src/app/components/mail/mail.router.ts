import { Routes } from '@angular/router';
import { MailComponent } from './mail.component';

import { InboxComponent } from './inbox/inbox.component';
import { StarredComponent } from './starred/starred.component';
import { SentComponent } from './sent/sent.component';
import { SpamComponent } from './spam/spam.component';
import { TrashComponent } from './trash/trash.component';

export const routerConfig: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MailComponent
      },
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'starred',
        component: StarredComponent
      },
      {
        path: 'sent',
        component: SentComponent
      },
      {
        path: 'spam',
        component: SpamComponent
      },
      {
        path: 'trash',
        component: TrashComponent
      },
    ]
  },
]