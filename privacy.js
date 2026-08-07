/**
 * One privacy policy, 18 languages, reused by every app.
 *
 * The page that loads this declares which app it is:
 *
 *   window.APP = { name: 'ONE MOVE', id: 'com.billionaire.onemove', ads: true, iap: true };
 *
 * so a new app is one small HTML file, not another copy of these translations. `{app}` in the text
 * below is replaced with the name. `ads` and `iap` decide whether those two sections appear at all --
 * an app with neither must not carry a policy claiming it shows advertising, and the sections are
 * numbered at render time so removing one leaves no gap.
 *
 * The sections assert: no account, no server of ours, saved data on the device only. An app that does
 * not hold to that cannot use this file; it needs text of its own.
 */

const APP = window.APP || {};
const NAME = APP.name || 'This app';
const HAS_ADS = APP.ads !== false;
const HAS_IAP = APP.iap !== false;

const GP = 'https://policies.google.com/privacy';
const AM = 'https://support.google.com/admob/answer/6128543';
const MAIL = 'dortkthf@gmail.com';
const gp = (t) => `<a href="${GP}" rel="noopener">${t}</a>`;
const am = (t) => `<a href="${AM}" rel="noopener">${t}</a>`;
const mail = `<a href="mailto:${MAIL}">${MAIL}</a>`;

/* Each locale: name (native, for the dropdown), dir, title, date, intro, and the seven sections by
   key. Order and numbering are decided in render(), not here. */
const L = {

en: { name: 'English', title: '{app} Privacy Policy', date: 'Effective date: August 7, 2026',
  intro: '{app} ("the app") respects your privacy. This policy explains what information the app handles and how.',
  collect: ['Information the app collects directly', 'The app requires no account or sign-in and does not directly collect personally identifiable information such as your name, email, or phone number. App data (progress, settings, items you have bought) is stored only on your device and is never sent to a server of ours.'],
  ads: ['Advertising (Google AdMob)', `The app shows ads through Google AdMob. To serve ads and prevent fraud, Google may collect your device's advertising ID, approximate location (IP-based), and device information. See the ${gp('Google Privacy Policy')} and ${am('how Google uses data in AdMob')}. You can reset your advertising ID or limit ad personalization in your device settings. Where the app offers a "Remove ads" purchase, buying it disables ads entirely.`],
  iap: ['In-app purchases (Google Play)', `In-app purchases are processed by Google Play Billing. The app never accesses your payment details; it only receives confirmation that a purchase completed. Payment processing is governed by the ${gp('Google Privacy Policy')}.`],
  children: ['Children’s privacy', 'The app is not directed primarily at children and does not knowingly collect personal information from children.'],
  deletion: ['Data deletion', 'All saved data lives on your device. Uninstalling the app or clearing its data in device settings removes it completely.'],
  contact: ['Contact', `Privacy inquiries: ${mail}`],
  changes: ['Changes', 'Any changes to this policy will be posted on this page.'] },

ko: { name: '한국어', title: '{app} 개인정보처리방침', date: '시행일: 2026년 8월 7일',
  intro: '{app}(이하 "앱")은 이용자의 개인정보를 소중하게 생각합니다. 본 방침은 앱이 어떤 정보를 어떻게 다루는지 설명합니다.',
  collect: ['앱이 직접 수집하는 정보', '앱은 회원가입이나 로그인을 요구하지 않으며, 이름·이메일·전화번호 등 개인 식별 정보를 직접 수집하지 않습니다. 앱 데이터(진행 상황, 설정, 구매한 아이템)는 이용자의 기기 안에만 저장되며 당사 서버로 전송되지 않습니다.'],
  ads: ['광고 (Google AdMob)', `앱은 Google AdMob을 통해 광고를 표시합니다. 이 과정에서 Google은 광고 제공 및 부정행위 방지를 위해 기기의 광고 ID, 대략적인 위치(IP 기반), 기기 정보 등을 수집할 수 있습니다. 자세한 내용은 ${gp('Google 개인정보처리방침')} 및 ${am('AdMob 데이터 사용 안내')}를 참고하세요. 기기 설정에서 광고 ID를 재설정하거나 맞춤 광고를 제한할 수 있습니다. 앱이 "광고 제거" 상품을 제공하는 경우 이를 구매하면 광고가 표시되지 않습니다.`],
  iap: ['인앱 결제 (Google Play)', `인앱 결제는 Google Play 결제 시스템을 통해 처리됩니다. 앱은 결제 카드 정보 등 금융 정보에 접근하지 않으며, Google Play가 제공하는 구매 완료 여부만 확인합니다. 결제 정보 처리는 ${gp('Google 개인정보처리방침')}을 따릅니다.`],
  children: ['아동의 개인정보', '앱은 아동을 주 대상으로 하지 않으며, 아동의 개인정보를 고의로 수집하지 않습니다.'],
  deletion: ['데이터 삭제', '앱의 모든 저장 데이터는 기기 안에 있으므로, 앱을 삭제하거나 기기 설정에서 앱 데이터를 삭제하면 완전히 제거됩니다.'],
  contact: ['문의', `개인정보 관련 문의: ${mail}`],
  changes: ['방침 변경', '본 방침이 변경되는 경우 이 페이지를 통해 공지합니다.'] },

ja: { name: '日本語', title: '{app} プライバシーポリシー', date: '施行日: 2026年8月7日',
  intro: '{app}(以下「本アプリ」)は、ユーザーのプライバシーを尊重します。本ポリシーでは、本アプリがどの情報をどのように扱うかを説明します。',
  collect: ['アプリが直接収集する情報', '本アプリはアカウント登録やログインを必要とせず、氏名・メールアドレス・電話番号などの個人を特定できる情報を直接収集しません。アプリのデータ(進行状況、設定、購入したアイテム)は端末内にのみ保存され、当方のサーバーへ送信されることはありません。'],
  ads: ['広告(Google AdMob)', `本アプリは Google AdMob を通じて広告を表示します。広告配信および不正防止のため、Google は端末の広告ID、おおよその位置情報(IPベース)、端末情報などを収集する場合があります。詳しくは${gp('Googleプライバシーポリシー')}および${am('AdMobにおけるデータ利用')}をご覧ください。端末の設定で広告IDのリセットやパーソナライズ広告の制限ができます。本アプリが「広告を削除」を提供している場合、購入すると広告は表示されなくなります。`],
  iap: ['アプリ内課金(Google Play)', `アプリ内課金は Google Play 課金システムで処理されます。本アプリがカード情報などの決済情報にアクセスすることはなく、購入完了の通知のみを受け取ります。決済情報の取り扱いは${gp('Googleプライバシーポリシー')}に従います。`],
  children: ['子どものプライバシー', '本アプリは主に子ども向けではなく、子どもの個人情報を故意に収集しません。'],
  deletion: ['データの削除', '保存データはすべて端末内にあります。アプリを削除するか、端末設定でアプリのデータを消去すれば完全に削除されます。'],
  contact: ['お問い合わせ', `プライバシーに関するお問い合わせ: ${mail}`],
  changes: ['ポリシーの変更', '本ポリシーを変更する場合は、このページでお知らせします。'] },

'zh-Hans': { name: '简体中文', title: '{app} 隐私政策', date: '生效日期:2026年8月7日',
  intro: '{app}(以下简称"本应用")尊重您的隐私。本政策说明本应用处理哪些信息以及如何处理。',
  collect: ['应用直接收集的信息', '本应用无需注册或登录,不会直接收集姓名、电子邮箱、电话号码等个人身份信息。应用数据(进度、设置、已购买的项目)仅保存在您的设备上,不会发送到我们的服务器。'],
  ads: ['广告(Google AdMob)', `本应用通过 Google AdMob 展示广告。为投放广告和防止欺诈,Google 可能收集设备的广告 ID、大致位置(基于 IP)和设备信息。详见${gp('Google 隐私政策')}与${am('AdMob 数据使用说明')}。您可以在设备设置中重置广告 ID 或限制个性化广告。若本应用提供"移除广告"项目,购买后将不再显示广告。`],
  iap: ['应用内购买(Google Play)', `应用内购买由 Google Play 结算系统处理。本应用不会接触您的支付信息,仅接收购买完成的确认。支付处理遵循${gp('Google 隐私政策')}。`],
  children: ['儿童隐私', '本应用并非主要面向儿童,不会有意收集儿童的个人信息。'],
  deletion: ['数据删除', '所有存档数据均保存在设备上。卸载应用或在设备设置中清除应用数据即可完全删除。'],
  contact: ['联系我们', `隐私相关咨询:${mail}`],
  changes: ['政策变更', '政策如有变更,将在本页面公布。'] },

'zh-Hant': { name: '繁體中文', title: '{app} 隱私權政策', date: '生效日期:2026年8月7日',
  intro: '{app}(以下稱「本應用程式」)尊重您的隱私。本政策說明本應用程式處理哪些資訊以及如何處理。',
  collect: ['應用程式直接蒐集的資訊', '本應用程式無需註冊或登入,不會直接蒐集姓名、電子郵件、電話號碼等個人識別資訊。應用程式資料(進度、設定、已購買的項目)僅儲存在您的裝置上,不會傳送至我們的伺服器。'],
  ads: ['廣告(Google AdMob)', `本應用程式透過 Google AdMob 顯示廣告。為投放廣告與防止詐欺,Google 可能蒐集裝置的廣告 ID、大致位置(以 IP 為準)與裝置資訊。詳見${gp('Google 隱私權政策')}與${am('AdMob 資料使用說明')}。您可在裝置設定中重設廣告 ID 或限制個人化廣告。若本應用程式提供「移除廣告」項目,購買後即不再顯示廣告。`],
  iap: ['應用程式內購買(Google Play)', `應用程式內購買由 Google Play 帳款系統處理。本應用程式不會接觸您的付款資訊,僅接收購買完成的確認。付款處理依循${gp('Google 隱私權政策')}。`],
  children: ['兒童隱私', '本應用程式並非主要以兒童為對象,不會蓄意蒐集兒童的個人資訊。'],
  deletion: ['資料刪除', '所有儲存資料皆位於裝置上。解除安裝應用程式或在裝置設定中清除應用程式資料即可完全刪除。'],
  contact: ['聯絡我們', `隱私相關詢問:${mail}`],
  changes: ['政策變更', '政策如有變更,將於本頁公告。'] },

es: { name: 'Español', title: 'Política de privacidad de {app}', date: 'Fecha de entrada en vigor: 7 de agosto de 2026',
  intro: '{app} ("la aplicación") respeta tu privacidad. Esta política explica qué información maneja la aplicación y cómo.',
  collect: ['Información que la aplicación recopila directamente', 'La aplicación no requiere cuenta ni inicio de sesión y no recopila directamente información de identificación personal como tu nombre, correo electrónico o número de teléfono. Los datos de la aplicación (progreso, ajustes, artículos comprados) se guardan solo en tu dispositivo y nunca se envían a un servidor nuestro.'],
  ads: ['Publicidad (Google AdMob)', `La aplicación muestra anuncios a través de Google AdMob. Para servir anuncios y prevenir el fraude, Google puede recopilar el ID de publicidad del dispositivo, la ubicación aproximada (basada en IP) e información del dispositivo. Consulta la ${gp('Política de privacidad de Google')} y ${am('cómo usa Google los datos en AdMob')}. Puedes restablecer tu ID de publicidad o limitar la personalización de anuncios en los ajustes del dispositivo. Cuando la aplicación ofrece la compra "Quitar anuncios", adquirirla desactiva la publicidad por completo.`],
  iap: ['Compras en la aplicación (Google Play)', `Las compras integradas se procesan mediante la facturación de Google Play. La aplicación nunca accede a tus datos de pago; solo recibe la confirmación de que la compra se completó. El procesamiento de pagos se rige por la ${gp('Política de privacidad de Google')}.`],
  children: ['Privacidad de los menores', 'La aplicación no está dirigida principalmente a niños y no recopila deliberadamente información personal de menores.'],
  deletion: ['Eliminación de datos', 'Todos los datos guardados residen en tu dispositivo. Desinstalar la aplicación o borrar sus datos en los ajustes del dispositivo los elimina por completo.'],
  contact: ['Contacto', `Consultas de privacidad: ${mail}`],
  changes: ['Cambios', 'Cualquier cambio en esta política se publicará en esta página.'] },

'pt-BR': { name: 'Português (Brasil)', title: 'Política de Privacidade do {app}', date: 'Data de vigência: 7 de agosto de 2026',
  intro: '{app} ("o aplicativo") respeita sua privacidade. Esta política explica quais informações o aplicativo trata e como.',
  collect: ['Informações que o aplicativo coleta diretamente', 'O aplicativo não exige conta nem login e não coleta diretamente informações de identificação pessoal, como nome, e-mail ou telefone. Os dados do aplicativo (progresso, configurações, itens comprados) ficam armazenados apenas no seu dispositivo e nunca são enviados a um servidor nosso.'],
  ads: ['Publicidade (Google AdMob)', `O aplicativo exibe anúncios pelo Google AdMob. Para veicular anúncios e prevenir fraudes, o Google pode coletar o ID de publicidade do dispositivo, a localização aproximada (por IP) e informações do dispositivo. Veja a ${gp('Política de Privacidade do Google')} e ${am('como o Google usa dados no AdMob')}. Você pode redefinir o ID de publicidade ou limitar a personalização de anúncios nas configurações do dispositivo. Quando o aplicativo oferece a compra "Remover anúncios", adquiri-la desativa a publicidade por completo.`],
  iap: ['Compras no aplicativo (Google Play)', `As compras integradas são processadas pelo faturamento do Google Play. O aplicativo nunca acessa seus dados de pagamento; recebe apenas a confirmação de que a compra foi concluída. O processamento de pagamentos segue a ${gp('Política de Privacidade do Google')}.`],
  children: ['Privacidade infantil', 'O aplicativo não é direcionado principalmente a crianças e não coleta intencionalmente informações pessoais de crianças.'],
  deletion: ['Exclusão de dados', 'Todos os dados salvos ficam no seu dispositivo. Desinstalar o aplicativo ou limpar seus dados nas configurações do dispositivo os remove completamente.'],
  contact: ['Contato', `Dúvidas sobre privacidade: ${mail}`],
  changes: ['Alterações', 'Qualquer alteração nesta política será publicada nesta página.'] },

fr: { name: 'Français', title: 'Politique de confidentialité de {app}', date: 'Date d’entrée en vigueur : 7 août 2026',
  intro: '{app} (« l’application ») respecte votre vie privée. Cette politique explique quelles informations l’application traite et comment.',
  collect: ['Informations collectées directement par l’application', 'L’application ne nécessite ni compte ni connexion et ne collecte directement aucune information permettant de vous identifier (nom, e-mail, numéro de téléphone). Les données de l’application (progression, réglages, articles achetés) sont stockées uniquement sur votre appareil et ne sont jamais envoyées à un serveur nous appartenant.'],
  ads: ['Publicité (Google AdMob)', `L’application affiche des publicités via Google AdMob. Pour diffuser les annonces et prévenir la fraude, Google peut collecter l’identifiant publicitaire de l’appareil, la position approximative (basée sur l’IP) et des informations sur l’appareil. Consultez la ${gp('Politique de confidentialité de Google')} et ${am('l’utilisation des données dans AdMob')}. Vous pouvez réinitialiser votre identifiant publicitaire ou limiter la personnalisation des annonces dans les réglages de l’appareil. Lorsque l’application propose l’achat « Supprimer les pubs », celui-ci désactive entièrement la publicité.`],
  iap: ['Achats intégrés (Google Play)', `Les achats intégrés sont traités par le système de facturation Google Play. L’application n’accède jamais à vos données de paiement ; elle reçoit uniquement la confirmation de l’achat. Le traitement des paiements est régi par la ${gp('Politique de confidentialité de Google')}.`],
  children: ['Vie privée des enfants', 'L’application ne s’adresse pas principalement aux enfants et ne collecte pas sciemment leurs données personnelles.'],
  deletion: ['Suppression des données', 'Toutes les données sont enregistrées sur votre appareil. Désinstaller l’application ou effacer ses données dans les réglages de l’appareil les supprime complètement.'],
  contact: ['Contact', `Questions relatives à la confidentialité : ${mail}`],
  changes: ['Modifications', 'Toute modification de cette politique sera publiée sur cette page.'] },

de: { name: 'Deutsch', title: '{app} Datenschutzerklärung', date: 'Gültig ab: 7. August 2026',
  intro: '{app} („die App") respektiert Ihre Privatsphäre. Diese Erklärung beschreibt, welche Informationen die App verarbeitet und wie.',
  collect: ['Von der App direkt erhobene Daten', 'Die App erfordert kein Konto und keine Anmeldung und erhebt keine personenbezogenen Daten wie Name, E-Mail-Adresse oder Telefonnummer. App-Daten (Fortschritt, Einstellungen, gekaufte Artikel) werden ausschließlich auf Ihrem Gerät gespeichert und niemals an einen Server von uns übertragen.'],
  ads: ['Werbung (Google AdMob)', `Die App zeigt Werbung über Google AdMob. Zur Auslieferung von Anzeigen und zur Betrugsprävention kann Google die Werbe-ID des Geräts, den ungefähren Standort (IP-basiert) und Geräteinformationen erheben. Siehe die ${gp('Google-Datenschutzerklärung')} und ${am('die Datennutzung in AdMob')}. Sie können die Werbe-ID in den Geräteeinstellungen zurücksetzen oder personalisierte Werbung einschränken. Bietet die App den Kauf „Werbung entfernen" an, wird damit Werbung vollständig deaktiviert.`],
  iap: ['In-App-Käufe (Google Play)', `In-App-Käufe werden über Google Play Billing abgewickelt. Die App hat keinen Zugriff auf Ihre Zahlungsdaten; sie erhält lediglich die Bestätigung des Kaufabschlusses. Die Zahlungsabwicklung unterliegt der ${gp('Google-Datenschutzerklärung')}.`],
  children: ['Datenschutz von Kindern', 'Die App richtet sich nicht primär an Kinder und erhebt wissentlich keine personenbezogenen Daten von Kindern.'],
  deletion: ['Datenlöschung', 'Alle gespeicherten Daten befinden sich auf Ihrem Gerät. Durch Deinstallation der App oder Löschen der App-Daten in den Geräteeinstellungen werden sie vollständig entfernt.'],
  contact: ['Kontakt', `Datenschutzanfragen: ${mail}`],
  changes: ['Änderungen', 'Änderungen dieser Erklärung werden auf dieser Seite veröffentlicht.'] },

it: { name: 'Italiano', title: 'Informativa sulla privacy di {app}', date: 'Data di entrata in vigore: 7 agosto 2026',
  intro: '{app} ("l’app") rispetta la tua privacy. Questa informativa spiega quali informazioni tratta l’app e in che modo.',
  collect: ['Informazioni raccolte direttamente dall’app', 'L’app non richiede account né accesso e non raccoglie direttamente informazioni identificative come nome, e-mail o numero di telefono. I dati dell’app (progressi, impostazioni, articoli acquistati) sono salvati solo sul tuo dispositivo e non vengono mai inviati a un nostro server.'],
  ads: ['Pubblicità (Google AdMob)', `L’app mostra annunci tramite Google AdMob. Per fornire gli annunci e prevenire le frodi, Google può raccogliere l’ID pubblicitario del dispositivo, la posizione approssimativa (basata sull’IP) e informazioni sul dispositivo. Consulta l’${gp('Informativa sulla privacy di Google')} e ${am('l’uso dei dati in AdMob')}. Puoi reimpostare l’ID pubblicitario o limitare la personalizzazione degli annunci nelle impostazioni del dispositivo. Quando l’app offre l’acquisto "Rimuovi annunci", acquistarlo disattiva del tutto la pubblicità.`],
  iap: ['Acquisti in-app (Google Play)', `Gli acquisti in-app sono gestiti dal sistema di fatturazione di Google Play. L’app non accede mai ai tuoi dati di pagamento; riceve solo la conferma dell’acquisto. Il trattamento dei pagamenti è regolato dall’${gp('Informativa sulla privacy di Google')}.`],
  children: ['Privacy dei minori', 'L’app non è rivolta principalmente ai bambini e non raccoglie consapevolmente i loro dati personali.'],
  deletion: ['Eliminazione dei dati', 'Tutti i dati salvati risiedono sul dispositivo. Disinstallando l’app o cancellandone i dati dalle impostazioni del dispositivo vengono rimossi completamente.'],
  contact: ['Contatti', `Domande sulla privacy: ${mail}`],
  changes: ['Modifiche', 'Eventuali modifiche a questa informativa saranno pubblicate su questa pagina.'] },

ru: { name: 'Русский', title: 'Политика конфиденциальности {app}', date: 'Дата вступления в силу: 7 августа 2026 г.',
  intro: '{app} («приложение») уважает вашу конфиденциальность. В этой политике описано, какие данные обрабатывает приложение и как.',
  collect: ['Данные, которые приложение собирает напрямую', 'Приложение не требует учётной записи и входа и не собирает напрямую персональные данные, такие как имя, электронная почта или номер телефона. Данные приложения (прогресс, настройки, купленные предметы) хранятся только на вашем устройстве и никогда не отправляются на наши серверы.'],
  ads: ['Реклама (Google AdMob)', `Приложение показывает рекламу через Google AdMob. Для показа объявлений и защиты от мошенничества Google может собирать рекламный идентификатор устройства, приблизительное местоположение (по IP) и сведения об устройстве. См. ${gp('Политику конфиденциальности Google')} и ${am('использование данных в AdMob')}. Вы можете сбросить рекламный идентификатор или ограничить персонализацию рекламы в настройках устройства. Если приложение предлагает покупку «Убрать рекламу», она полностью отключает рекламу.`],
  iap: ['Покупки в приложении (Google Play)', `Покупки обрабатываются платёжной системой Google Play. Приложение не имеет доступа к вашим платёжным данным и получает только подтверждение завершённой покупки. Обработка платежей регулируется ${gp('Политикой конфиденциальности Google')}.`],
  children: ['Конфиденциальность детей', 'Приложение не ориентировано в первую очередь на детей и сознательно не собирает их персональные данные.'],
  deletion: ['Удаление данных', 'Все сохранённые данные находятся на устройстве. Удаление приложения или очистка его данных в настройках устройства полностью их стирает.'],
  contact: ['Контакты', `Вопросы о конфиденциальности: ${mail}`],
  changes: ['Изменения', 'Изменения этой политики будут опубликованы на этой странице.'] },

pl: { name: 'Polski', title: 'Polityka prywatności {app}', date: 'Data wejścia w życie: 7 sierpnia 2026 r.',
  intro: '{app} („aplikacja") szanuje Twoją prywatność. Ta polityka wyjaśnia, jakie informacje aplikacja przetwarza i w jaki sposób.',
  collect: ['Informacje zbierane bezpośrednio przez aplikację', 'Aplikacja nie wymaga konta ani logowania i nie zbiera bezpośrednio danych osobowych, takich jak imię i nazwisko, e-mail czy numer telefonu. Dane aplikacji (postępy, ustawienia, zakupione elementy) są zapisywane wyłącznie na Twoim urządzeniu i nigdy nie są wysyłane na nasz serwer.'],
  ads: ['Reklamy (Google AdMob)', `Aplikacja wyświetla reklamy za pośrednictwem Google AdMob. W celu wyświetlania reklam i zapobiegania oszustwom Google może zbierać identyfikator reklamowy urządzenia, przybliżoną lokalizację (na podstawie IP) oraz informacje o urządzeniu. Zobacz ${gp('Politykę prywatności Google')} oraz ${am('sposób wykorzystania danych w AdMob')}. Identyfikator reklamowy możesz zresetować, a personalizację reklam ograniczyć w ustawieniach urządzenia. Jeśli aplikacja oferuje zakup „Usuń reklamy", całkowicie wyłącza on reklamy.`],
  iap: ['Zakupy w aplikacji (Google Play)', `Zakupy w aplikacji obsługuje system płatności Google Play. Aplikacja nigdy nie ma dostępu do Twoich danych płatniczych; otrzymuje jedynie potwierdzenie zakupu. Przetwarzanie płatności podlega ${gp('Polityce prywatności Google')}.`],
  children: ['Prywatność dzieci', 'Aplikacja nie jest skierowana głównie do dzieci i świadomie nie zbiera ich danych osobowych.'],
  deletion: ['Usuwanie danych', 'Wszystkie zapisane dane znajdują się na urządzeniu. Odinstalowanie aplikacji lub wyczyszczenie jej danych w ustawieniach urządzenia usuwa je całkowicie.'],
  contact: ['Kontakt', `Pytania dotyczące prywatności: ${mail}`],
  changes: ['Zmiany', 'Wszelkie zmiany tej polityki zostaną opublikowane na tej stronie.'] },

tr: { name: 'Türkçe', title: '{app} Gizlilik Politikası', date: 'Yürürlük tarihi: 7 Ağustos 2026',
  intro: '{app} ("uygulama") gizliliğinize saygı duyar. Bu politika, uygulamanın hangi bilgileri nasıl işlediğini açıklar.',
  collect: ['Uygulamanın doğrudan topladığı bilgiler', 'Uygulama hesap veya giriş gerektirmez; ad, e-posta veya telefon numarası gibi kişisel bilgileri doğrudan toplamaz. Uygulama verileri (ilerleme, ayarlar, satın alınan öğeler) yalnızca cihazınızda saklanır ve hiçbir zaman bize ait bir sunucuya gönderilmez.'],
  ads: ['Reklamlar (Google AdMob)', `Uygulama, reklamları Google AdMob üzerinden gösterir. Reklam sunumu ve sahtekârlığı önleme amacıyla Google, cihazın reklam kimliğini, yaklaşık konumu (IP tabanlı) ve cihaz bilgilerini toplayabilir. Ayrıntılar için ${gp('Google Gizlilik Politikası’na')} ve ${am('AdMob’da veri kullanımına')} bakın. Cihaz ayarlarından reklam kimliğinizi sıfırlayabilir veya kişiselleştirilmiş reklamları sınırlayabilirsiniz. Uygulama "Reklamları kaldır" satın alma seçeneği sunuyorsa, satın alındığında reklamlar tamamen kapanır.`],
  iap: ['Uygulama içi satın almalar (Google Play)', `Uygulama içi satın almalar Google Play faturalandırması ile işlenir. Uygulama ödeme bilgilerinize asla erişmez; yalnızca satın almanın tamamlandığı bilgisini alır. Ödeme işlemleri ${gp('Google Gizlilik Politikası’na')} tabidir.`],
  children: ['Çocukların gizliliği', 'Uygulama öncelikle çocuklara yönelik değildir ve çocuklardan bilerek kişisel bilgi toplamaz.'],
  deletion: ['Verilerin silinmesi', 'Tüm kayıtlı veriler cihazınızdadır. Uygulamayı kaldırmak veya cihaz ayarlarından uygulama verilerini temizlemek verileri tamamen siler.'],
  contact: ['İletişim', `Gizlilikle ilgili sorular: ${mail}`],
  changes: ['Değişiklikler', 'Bu politikadaki değişiklikler bu sayfada yayınlanır.'] },

ar: { name: 'العربية', dir: 'rtl', title: 'سياسة خصوصية {app}', date: 'تاريخ السريان: 7 أغسطس 2026',
  intro: 'يحترم تطبيق {app} («التطبيق») خصوصيتك. توضح هذه السياسة المعلومات التي يتعامل معها التطبيق وكيفية ذلك.',
  collect: ['المعلومات التي يجمعها التطبيق مباشرة', 'لا يتطلب التطبيق حسابًا أو تسجيل دخول، ولا يجمع مباشرة أي معلومات تعريف شخصية مثل الاسم أو البريد الإلكتروني أو رقم الهاتف. تُحفظ بيانات التطبيق (التقدم والإعدادات والعناصر المشتراة) على جهازك فقط ولا تُرسل أبدًا إلى خادم تابع لنا.'],
  ads: ['الإعلانات (Google AdMob)', `يعرض التطبيق إعلانات عبر Google AdMob. لعرض الإعلانات ومنع الاحتيال، قد تجمع Google معرّف الإعلانات للجهاز والموقع التقريبي (استنادًا إلى عنوان IP) ومعلومات الجهاز. راجع ${gp('سياسة خصوصية Google')} و${am('كيفية استخدام البيانات في AdMob')}. يمكنك إعادة تعيين معرّف الإعلانات أو تقييد الإعلانات المخصصة من إعدادات الجهاز. وإذا كان التطبيق يوفّر عملية شراء «إزالة الإعلانات»، فإن شراءها يوقف الإعلانات نهائيًا.`],
  iap: ['عمليات الشراء داخل التطبيق (Google Play)', `تتم معالجة عمليات الشراء داخل التطبيق عبر نظام الدفع في Google Play. ولا يصل التطبيق أبدًا إلى بيانات الدفع الخاصة بك؛ بل يتلقى فقط تأكيد إتمام الشراء. تخضع معالجة المدفوعات ${gp('لسياسة خصوصية Google')}.`],
  children: ['خصوصية الأطفال', 'التطبيق ليس موجهًا للأطفال في المقام الأول ولا يجمع عن قصد معلومات شخصية منهم.'],
  deletion: ['حذف البيانات', 'جميع البيانات المحفوظة موجودة على جهازك. يؤدي إلغاء تثبيت التطبيق أو مسح بياناته من إعدادات الجهاز إلى حذفها نهائيًا.'],
  contact: ['التواصل', `للاستفسارات المتعلقة بالخصوصية: ${mail}`],
  changes: ['التغييرات', 'سيتم نشر أي تغييرات على هذه السياسة في هذه الصفحة.'] },

hi: { name: 'हिन्दी', title: '{app} गोपनीयता नीति', date: 'प्रभावी तिथि: 7 अगस्त 2026',
  intro: '{app} ("ऐप") आपकी गोपनीयता का सम्मान करता है। यह नीति बताती है कि ऐप कौन-सी जानकारी कैसे संभालता है।',
  collect: ['ऐप द्वारा सीधे एकत्र की जाने वाली जानकारी', 'ऐप में खाता या लॉगिन की आवश्यकता नहीं है और यह नाम, ईमेल या फ़ोन नंबर जैसी व्यक्तिगत पहचान जानकारी सीधे एकत्र नहीं करता। ऐप का डेटा (प्रगति, सेटिंग, खरीदी गई वस्तुएँ) केवल आपके डिवाइस पर सहेजा जाता है और कभी हमारे सर्वर पर नहीं भेजा जाता।'],
  ads: ['विज्ञापन (Google AdMob)', `ऐप Google AdMob के माध्यम से विज्ञापन दिखाता है। विज्ञापन दिखाने और धोखाधड़ी रोकने के लिए Google डिवाइस की विज्ञापन ID, अनुमानित स्थान (IP-आधारित) और डिवाइस जानकारी एकत्र कर सकता है। ${gp('Google गोपनीयता नीति')} और ${am('AdMob में डेटा उपयोग')} देखें। आप डिवाइस सेटिंग में विज्ञापन ID रीसेट कर सकते हैं या वैयक्तिकृत विज्ञापन सीमित कर सकते हैं। जहाँ ऐप "विज्ञापन हटाएँ" खरीद प्रदान करता है, उसे खरीदने पर विज्ञापन पूरी तरह बंद हो जाते हैं।`],
  iap: ['इन-ऐप खरीदारी (Google Play)', `इन-ऐप खरीदारी Google Play बिलिंग से संसाधित होती है। ऐप आपके भुगतान विवरण तक कभी नहीं पहुँचता; उसे केवल खरीद पूरी होने की पुष्टि मिलती है। भुगतान प्रोसेसिंग ${gp('Google गोपनीयता नीति')} के अधीन है।`],
  children: ['बच्चों की गोपनीयता', 'ऐप मुख्य रूप से बच्चों के लिए नहीं है और जानबूझकर बच्चों की व्यक्तिगत जानकारी एकत्र नहीं करता।'],
  deletion: ['डेटा हटाना', 'सभी सहेजा गया डेटा आपके डिवाइस पर है। ऐप अनइंस्टॉल करने या डिवाइस सेटिंग में ऐप डेटा साफ़ करने से यह पूरी तरह हट जाता है।'],
  contact: ['संपर्क', `गोपनीयता संबंधी प्रश्न: ${mail}`],
  changes: ['परिवर्तन', 'इस नीति में कोई भी बदलाव इसी पृष्ठ पर प्रकाशित किया जाएगा।'] },

id: { name: 'Bahasa Indonesia', title: 'Kebijakan Privasi {app}', date: 'Tanggal berlaku: 7 Agustus 2026',
  intro: '{app} ("aplikasi") menghormati privasi Anda. Kebijakan ini menjelaskan informasi apa yang ditangani aplikasi dan bagaimana caranya.',
  collect: ['Informasi yang dikumpulkan langsung oleh aplikasi', 'Aplikasi tidak memerlukan akun atau login dan tidak mengumpulkan langsung informasi identitas pribadi seperti nama, email, atau nomor telepon. Data aplikasi (progres, pengaturan, item yang dibeli) hanya disimpan di perangkat Anda dan tidak pernah dikirim ke server kami.'],
  ads: ['Iklan (Google AdMob)', `Aplikasi menampilkan iklan melalui Google AdMob. Untuk menayangkan iklan dan mencegah penipuan, Google dapat mengumpulkan ID iklan perangkat, lokasi perkiraan (berbasis IP), dan informasi perangkat. Lihat ${gp('Kebijakan Privasi Google')} dan ${am('penggunaan data di AdMob')}. Anda dapat menyetel ulang ID iklan atau membatasi personalisasi iklan di pengaturan perangkat. Jika aplikasi menawarkan pembelian "Hapus iklan", membelinya akan menonaktifkan iklan sepenuhnya.`],
  iap: ['Pembelian dalam aplikasi (Google Play)', `Pembelian dalam aplikasi diproses oleh Google Play Billing. Aplikasi tidak pernah mengakses detail pembayaran Anda; hanya menerima konfirmasi bahwa pembelian selesai. Pemrosesan pembayaran diatur oleh ${gp('Kebijakan Privasi Google')}.`],
  children: ['Privasi anak', 'Aplikasi ini tidak ditujukan terutama untuk anak-anak dan tidak dengan sengaja mengumpulkan informasi pribadi anak.'],
  deletion: ['Penghapusan data', 'Semua data tersimpan berada di perangkat Anda. Menghapus aplikasi atau membersihkan datanya di pengaturan perangkat akan menghapusnya sepenuhnya.'],
  contact: ['Kontak', `Pertanyaan privasi: ${mail}`],
  changes: ['Perubahan', 'Setiap perubahan kebijakan ini akan diumumkan di halaman ini.'] },

th: { name: 'ไทย', title: 'นโยบายความเป็นส่วนตัวของ {app}', date: 'วันที่มีผลบังคับใช้: 7 สิงหาคม 2026',
  intro: '{app} ("แอป") เคารพความเป็นส่วนตัวของคุณ นโยบายนี้อธิบายว่าแอปจัดการข้อมูลใดและอย่างไร',
  collect: ['ข้อมูลที่แอปเก็บโดยตรง', 'แอปไม่ต้องสมัครสมาชิกหรือเข้าสู่ระบบ และไม่เก็บข้อมูลระบุตัวตน เช่น ชื่อ อีเมล หรือหมายเลขโทรศัพท์โดยตรง ข้อมูลของแอป (ความคืบหน้า การตั้งค่า รายการที่ซื้อ) จะบันทึกไว้ในอุปกรณ์ของคุณเท่านั้น และไม่ถูกส่งไปยังเซิร์ฟเวอร์ของเรา'],
  ads: ['โฆษณา (Google AdMob)', `แอปแสดงโฆษณาผ่าน Google AdMob เพื่อแสดงโฆษณาและป้องกันการฉ้อโกง Google อาจเก็บรหัสโฆษณาของอุปกรณ์ ตำแหน่งโดยประมาณ (จาก IP) และข้อมูลอุปกรณ์ ดู${gp('นโยบายความเป็นส่วนตัวของ Google')}และ${am('การใช้ข้อมูลใน AdMob')} คุณสามารถรีเซ็ตรหัสโฆษณาหรือจำกัดโฆษณาที่ปรับตามโปรไฟล์ได้ในการตั้งค่าอุปกรณ์ หากแอปมีรายการซื้อ "ลบโฆษณา" การซื้อจะปิดโฆษณาอย่างถาวร`],
  iap: ['การซื้อในแอป (Google Play)', `การซื้อในแอปประมวลผลผ่านระบบชำระเงินของ Google Play แอปไม่มีสิทธิ์เข้าถึงข้อมูลการชำระเงินของคุณ ได้รับเพียงการยืนยันว่าการซื้อเสร็จสมบูรณ์ การประมวลผลการชำระเงินเป็นไปตาม${gp('นโยบายความเป็นส่วนตัวของ Google')}`],
  children: ['ความเป็นส่วนตัวของเด็ก', 'แอปไม่ได้มุ่งเป้าไปที่เด็กเป็นหลัก และไม่จงใจเก็บข้อมูลส่วนบุคคลของเด็ก'],
  deletion: ['การลบข้อมูล', 'ข้อมูลที่บันทึกทั้งหมดอยู่ในอุปกรณ์ของคุณ การถอนการติดตั้งแอปหรือล้างข้อมูลแอปในการตั้งค่าอุปกรณ์จะลบข้อมูลออกทั้งหมด'],
  contact: ['ติดต่อ', `สอบถามเรื่องความเป็นส่วนตัว: ${mail}`],
  changes: ['การเปลี่ยนแปลง', 'การเปลี่ยนแปลงนโยบายนี้จะประกาศในหน้านี้'] },

vi: { name: 'Tiếng Việt', title: 'Chính sách quyền riêng tư của {app}', date: 'Ngày hiệu lực: 7 tháng 8, 2026',
  intro: '{app} ("ứng dụng") tôn trọng quyền riêng tư của bạn. Chính sách này giải thích ứng dụng xử lý thông tin gì và như thế nào.',
  collect: ['Thông tin ứng dụng thu thập trực tiếp', 'Ứng dụng không yêu cầu tài khoản hay đăng nhập và không trực tiếp thu thập thông tin nhận dạng cá nhân như tên, email hay số điện thoại. Dữ liệu ứng dụng (tiến trình, cài đặt, vật phẩm đã mua) chỉ được lưu trên thiết bị của bạn và không bao giờ gửi đến máy chủ của chúng tôi.'],
  ads: ['Quảng cáo (Google AdMob)', `Ứng dụng hiển thị quảng cáo qua Google AdMob. Để phân phối quảng cáo và chống gian lận, Google có thể thu thập ID quảng cáo của thiết bị, vị trí gần đúng (dựa trên IP) và thông tin thiết bị. Xem ${gp('Chính sách quyền riêng tư của Google')} và ${am('cách Google dùng dữ liệu trong AdMob')}. Bạn có thể đặt lại ID quảng cáo hoặc hạn chế quảng cáo được cá nhân hóa trong cài đặt thiết bị. Nếu ứng dụng có mục mua "Xóa quảng cáo", việc mua sẽ tắt hoàn toàn quảng cáo.`],
  iap: ['Mua trong ứng dụng (Google Play)', `Giao dịch mua trong ứng dụng được xử lý qua hệ thống thanh toán Google Play. Ứng dụng không bao giờ truy cập thông tin thanh toán của bạn; chỉ nhận xác nhận giao dịch hoàn tất. Việc xử lý thanh toán tuân theo ${gp('Chính sách quyền riêng tư của Google')}.`],
  children: ['Quyền riêng tư của trẻ em', 'Ứng dụng không nhắm chủ yếu đến trẻ em và không cố ý thu thập thông tin cá nhân của trẻ.'],
  deletion: ['Xóa dữ liệu', 'Mọi dữ liệu lưu trữ đều nằm trên thiết bị của bạn. Gỡ cài đặt ứng dụng hoặc xóa dữ liệu ứng dụng trong cài đặt thiết bị sẽ xóa hoàn toàn.'],
  contact: ['Liên hệ', `Thắc mắc về quyền riêng tư: ${mail}`],
  changes: ['Thay đổi', 'Mọi thay đổi của chính sách này sẽ được đăng trên trang này.'] },
};

/* Fixed order. A section the app does not have is dropped, and what remains is renumbered, so an
   app without ads never shows a gap where section 2 used to be. */
const ORDER = ['collect', HAS_ADS && 'ads', HAS_IAP && 'iap', 'children', 'deletion', 'contact', 'changes']
  .filter(Boolean);

const sel = document.getElementById('lang');
for (const [code, loc] of Object.entries(L)) {
  const o = document.createElement('option');
  o.value = code; o.textContent = loc.name;
  sel.appendChild(o);
}

function render(code) {
  const loc = L[code] || L.en;
  const withName = (s) => s.replaceAll('{app}', NAME);
  document.documentElement.lang = code;
  document.documentElement.dir = loc.dir || 'ltr';
  document.title = withName(loc.title);
  document.getElementById('content').innerHTML =
    `<h1>${withName(loc.title)}</h1>` +
    `<p class="meta"><span>${loc.date}</span>${APP.id ? `<span>${APP.id}</span>` : ''}</p>` +
    `<p>${withName(loc.intro)}</p>` +
    ORDER.map((k, i) => `<h2>${i + 1}. ${loc[k][0]}</h2><p>${loc[k][1]}</p>`).join('');
  try { localStorage.setItem('privacy.lang', code); } catch {}
}

sel.addEventListener('change', () => render(sel.value));

/* Default English; ?lang= wins so a store listing can link straight to the reader's language, and a
   previously chosen language is remembered after that. */
let start = 'en';
try { const saved = localStorage.getItem('privacy.lang'); if (saved && L[saved]) start = saved; } catch {}
const asked = new URLSearchParams(location.search).get('lang');
if (asked && L[asked]) start = asked;
sel.value = start;
render(start);
