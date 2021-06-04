# slack-line
Slackにメッセージが届いたときに、LINEに通知を送るプログラムです。

設定手順
1.LINE Notifyでアクセストークンを発行する。トークンを控えておく。
2.GASでスクリプトを書く。1で発行したトークンをソースに反映する。
3.デプロイする。アクセスできるユーザーは「全員」にする。デプロイURLを控えておく。
4.https://チームURL/apps/manage でOutgoing WebHooksの設定をする。3のデプロイURLを入力する。トークンを控えておく。
5.ソースコードに4のトークンを反映する。
6.デプロイする。アクセスできるユーザーは「全員」にする。デプロイURLを控えておく。
7.https://チームURL/apps/manage でOutgoing WebHooksの設定を変更する。6のデプロイURLを入力する。

参考：https://qiita.com/AzuQiita/items/35f43b8a5609f037bbef
