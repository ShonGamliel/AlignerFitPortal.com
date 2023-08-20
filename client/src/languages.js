const languages = {
    Login: {
        he: "התחברות",
        ch: "登录",
        tu: "Giriş",
        fr: "Connexion",
        ru: "Вход",
    },
    "Sign Up": {
        he: "הירשם",
        ch: "注册",
        tu: "Kayıt Ol",
        fr: "Inscription",
        ru: "Регистрация",
    },
    "Dont have an account?": {
        he: "אין לך משתמש?",
        ch: "没有帐户?",
        tu: "Hesabın yok mu?",
        fr: "Vous n'avez pas de compte ?",
        ru: "Нет учетной записи?",
    },
    "Sign In": {
        he: "התחבר",
        ch: "登录",
        tu: "Giriş Yap",
        fr: "Connexion",
        ru: "Войти",
    },
    Register: {
        he: "הרשמה",
        ch: "注册",
        tu: "Kayıt",
        fr: "Inscription",
        ru: "Регистрация",
    },
    "Already have an account?": {
        he: "כבר יש לך משתמש?",
        ch: "已经有帐户?",
        tu: "Zaten hesabın var mı?",
        fr: "Vous avez déjà un compte ?",
        ru: "Уже есть учетная запись?",
    },
    Password: {
        he: "סיסמא",
        ch: "密码",
        tu: "Şifre",
        fr: "Mot de passe",
        ru: "Пароль",
    },
    "Confirm Password": {
        he: "אשר סיסמא",
        ch: "确认密码",
        tu: "Şifreyi Onayla",
        fr: "Confirmer le mot de passe",
        ru: "Подтвердите пароль",
    },
    "Full Name": {
        he: "שם מלא",
        ch: "全名",
        tu: "Ad Soyad",
        fr: "Nom complet",
        ru: "Полное имя",
    },
    Clinics: {
        he: "קליניקות",
        ch: "诊所",
        tu: "Klinikler",
        fr: "Cliniques",
        ru: "Клиники",
    },
    Name: {
        he: "שם",
        ch: "名称",
        tu: "İsim",
        fr: "Nom",
        ru: "Имя",
    },
    Address: {
        he: "כתובת",
        ch: "地址",
        tu: "Adres",
        fr: "Adresse",
        ru: "Адрес",
    },
    Email: {
        he: "אימייל",
        ch: "电子邮件",
        tu: "E-posta",
        fr: "E-mail",
        ru: "Электронная почта",
    },
    Phone: {
        he: "טלפון",
        ch: "电话",
        tu: "Telefon",
        fr: "Téléphone",
        ru: "Телефон",
    },
    Country: {
        he: "מדינה",
        ch: "国家",
        tu: "Ülke",
        fr: "Pays",
        ru: "Страна",
    },
    City: {
        he: "עיר",
        ch: "城市",
        tu: "Şehir",
        fr: "Ville",
        ru: "Город",
    },
    Postcode: {
        he: "מיקוד",
        ch: "邮编",
        tu: "Posta Kodu",
        fr: "Code postal",
        ru: "Почтовый индекс",
    },
    "Add Clinic": {
        he: "הוספת קליניקה",
        ch: "添加诊所",
        tu: "Klinik Ekle",
        fr: "Ajouter une clinique",
        ru: "Добавить клинику",
    },
    Abort: {
        he: "ביטול",
        ch: "中止",
        tu: "İptal",
        fr: "Abandonner",
        ru: "Отмена",
    },
    Submit: {
        he: "שלח",
        ch: "提交",
        tu: "Gönder",
        fr: "Soumettre",
        ru: "Отправить",
    },
    Cases: {
        he: "תיקים",
        ch: "病例",
        tu: "Vakalar",
        fr: "Cas",
        ru: "Случаи",
    },
    Clinic: {
        he: "קליניקה",
        ch: "诊所",
        tu: "Klinik",
        fr: "Clinique",
        ru: "Клиника",
    },
    Chat: {
        he: "צ'אט",
        ch: "聊天",
        tu: "Sohbet",
        fr: "Chat",
        ru: "Чат",
    },
    Planning: {
        he: "בתיכנון",
        ch: "计划中",
        tu: "Planlama",
        fr: "Planification",
        ru: "Планирование",
    },
    "New Case": {
        he: "תיק חדש",
        ch: "新病例",
        tu: "Yeni Vaka",
        fr: "Nouveau cas",
        ru: "Новый случай",
    },
    Date: {
        he: "תאריך",
        ch: "日期",
        tu: "Tarih",
        fr: "Date",
        ru: "Дата",
    },
    Case: {
        he: "תיק",
        ch: "病例",
        tu: "Vaka",
        fr: "Cas",
        ru: "Случай",
    },
    Patient: {
        he: "מטופל",
        ch: "患者",
        tu: "Hasta",
        fr: "Patient",
        ru: "Пациент",
    },
    Status: {
        he: "סטטוס",
        ch: "状态",
        tu: "Durum",
        fr: "Statut",
        ru: "Статус",
    },
    Progress: {
        he: "התקדמות",
        ch: "进度",
        tu: "İlerleme",
        fr: "Progrès",
        ru: "Прогресс",
    },
    Pending: {
        he: "בהמתנה",
        ch: "待定",
        tu: "Beklemede",
        fr: "En attente",
        ru: "Ожидается",
    },
    "Choose Filters": {
        he: "סנן לפי",
        ch: "选择过滤器",
        tu: "Filtre Seç",
        fr: "Choisir les filtres",
        ru: "Выберите фильтры",
    },
    Cancelled: {
        he: "מבוטל",
        ch: "已取消",
        tu: "İptal Edildi",
        fr: "Annulé",
        ru: "Отменено",
    },
    "Contact Pending": {
        he: "ממתין ליצירת קשר",
        ch: "待联系",
        tu: "Bağlantı Bekleniyor",
        fr: "Contact en attente",
        ru: "Ожидание контакта",
    },
    "Follow Up Required": {
        he: "דרוש מעקב",
        ch: "需要跟进",
        tu: "Takip Gerekli",
        fr: "Suivi nécessaire",
        ru: "Требуется отслеживание",
    },
    Paid: {
        he: "שולם",
        ch: "已付款",
        tu: "Ödendi",
        fr: "Payé",
        ru: "Оплачено",
    },
    Done: {
        he: "הושלם",
        ch: "完成",
        tu: "Tamamlandı",
        fr: "Terminé",
        ru: "Готово",
    },
    "Not Interested": {
        he: "לא מעוניין",
        ch: "不感兴趣",
        tu: "İlgilenmiyor",
        fr: "Pas intéressé",
        ru: "Не интересует",
    },
    Color: {
        he: "צבע",
        ch: "颜色",
        tu: "Renk",
        fr: "Couleur",
        ru: "Цвет",
    },
    Translucency: {
        he: "שקיפות",
        ch: "透明度",
        tu: "Saydamlık",
        fr: "Translucidité",
        ru: "Прозрачность",
    },
    Gender: {
        he: "מין",
        ch: "性别",
        tu: "Cinsiyet",
        fr: "Genre",
        ru: "Пол",
    },
    Age: {
        he: "גיל",
        ch: "年龄",
        tu: "Yaş",
        fr: "Âge",
        ru: "Возраст",
    },
    Back: {
        he: "חזרה",
        ch: "返回",
        tu: "Geri",
        fr: "Retour",
        ru: "Назад",
    },
    "Download All Files": {
        he: "הורד את כל הקבצים",
        ch: "下载所有文件",
        tu: "Tüm Dosyaları İndir",
        fr: "Télécharger tous les fichiers",
        ru: "Скачать все файлы",
    },
    Archive: {
        he: "ארכיון",
        ch: "档案馆",
        tu: "Arşiv",
        fr: "Archives",
        ru: "Архив",
    },
    Unarchive: {
        he: "הוצא מהארכיון",
        ch: "取消存档",
        tu: "Arşivden Çıkar",
        fr: "Désarchiver",
        ru: "Извлечь из архива",
    },
    Chats: {
        he: "צ'אטים",
        ch: "聊天记录",
        tu: "Sohbetler",
        fr: "Chats",
        ru: "Чаты",
    },
    yesterday: {
        he: "אתמול",
        ch: "昨天",
        tu: "dün",
        fr: "hier",
        ru: "вчера",
    },
    "choose portal": {
        he: "בחר פורטל",
        ch: "选择门户",
        tu: "portal seç",
        fr: "choisir le portail",
        ru: "выберите портал",
    },
    prosthesis: {
        he: "פרותטיקה",
        ch: "假体",
        tu: "protez",
        fr: "prothèse",
        ru: "протезирование",
    },
    "clear aligners": {
        he: "יישור שיניים",
        ch: "隐形牙套",
        tu: "şeffaf diş telleri",
        fr: "gouttières transparentes",
        ru: "прозрачные брекеты",
    },
    "waiting for approval": {
        he: "ממתין לאישור",
        ch: "等待批准",
        tu: "onay bekleniyor",
        fr: "en attente d'approbation",
        ru: "ожидание подтверждения",
    },
    Manufacturing: {
        he: "בייצור",
        ch: "制造中",
        tu: "Üretim",
        fr: "Fabrication",
        ru: "Изготовление",
    },
    shipped: {
        he: "נשלח",
        ch: "已发货",
        tu: "gönderildi",
        fr: "expédié",
        ru: "отправлено",
    },
    "quick reply": {
        he: "תגובה מהירה",
        ch: "快速回复",
        tu: "hızlı cevap",
        fr: "réponse rapide",
        ru: "быстрый ответ",
    },
    restoration: {
        he: "שיקום",
        ch: "修复",
        tu: "restorasyon",
        fr: "restauration",
        ru: "восстановление",
    },
    logout: {
        he: "התנתקות",
        ch: "登出",
        tu: "çıkış yap",
        fr: "déconnexion",
        ru: "выйти",
    },
    hebrew: {
        he: "עברית",
        ch: "希伯来语",
        tu: "İbranice",
        fr: "Hébreu",
        ru: "иврит",
    },
    cancel: {
        he: "ביטול",
        ch: "取消",
        tu: "İptal",
        fr: "Annuler",
        ru: "отмена",
    },
    Next: {
        he: "הבא",
        ch: "下一步",
        tu: "Sonraki",
        fr: "Suivant",
        ru: "Далее",
    },
    step: {
        he: "שלב",
        ch: "步骤",
        tu: "adım",
        fr: "étape",
        ru: "шаг",
    },
    "Choose case's clinic": {
        he: "בחר קליניקה",
        ch: "选择病例诊所",
        tu: "Vaka kliniğini seç",
        fr: "Choisir la clinique du cas",
        ru: "Выберите клинику для случая",
    },
    "You have not defined your clinics yet": {
        he: "לא הגדרת את הקליניקות שלך עדיין",
        ch: "您还没有定义诊所",
        tu: "Henüz kliniklerinizi tanımlamadınız",
        fr: "Vous n'avez pas encore défini vos cliniques",
        ru: "Вы еще не определили свои клиники",
    },
    "add now": {
        he: "הגדר עכשיו",
        ch: "现在添加",
        tu: "şimdi ekle",
        fr: "ajouter maintenant",
        ru: "добавьте сейчас",
    },
    "Patient's Information": {
        he: "מידע על המטופל",
        ch: "患者信息",
        tu: "Hasta Bilgisi",
        fr: "Informations du patient",
        ru: "Информация о пациенте",
    },
    male: {
        he: "זכר",
        ch: "男",
        tu: "erkek",
        fr: "masculin",
        ru: "мужской",
    },
    female: {
        he: "נקבה",
        ch: "女",
        tu: "kadın",
        fr: "féminin",
        ru: "женский",
    },
    other: {
        he: "אחר",
        ch: "其他",
        tu: "diğer",
        fr: "autre",
        ru: "другой",
    },
    "Patient's First Name": {
        he: "שם המטופל",
        ch: "患者名",
        tu: "Hasta Adı",
        fr: "Prénom du patient",
        ru: "Имя пациента",
    },
    "Patient's Last Name": {
        he: "שם המשפחה של המטופל",
        ch: "患者姓",
        tu: "Hasta Soyadı",
        fr: "Nom de famille du patient",
        ru: "Фамилия пациента",
    },
    "Patient's Age": {
        he: "גיל המטופל",
        ch: "患者年龄",
        tu: "Hasta Yaşı",
        fr: "Âge du patient",
        ru: "Возраст пациента",
    },
    Required: {
        he: "חובה",
        ch: "必填",
        tu: "Zorunlu",
        fr: "Obligatoire",
        ru: "Обязательно",
    },
    "Restorations Types Required": {
        he: "נדרשים סוגי שיקום",
        ch: "需要修复类型",
        tu: "Restorasyon Tipleri Gerekli",
        fr: "Types de restaurations requis",
        ru: "Требуемые типы реставраций",
    },
    type: {
        he: "סוג",
        ch: "类型",
        tu: "tip",
        fr: "type",
        ru: "тип",
    },
    reset: {
        he: "איפוס",
        ch: "重置",
        tu: "sıfırla",
        fr: "réinitialiser",
        ru: "сброс",
    },
    "Select Translucency - Optional": {
        he: "בחר שקיפות - לא חובה",
        ch: "选择透明度- 可选",
        tu: "Saydamlık Seçin - İsteğe Bağlı",
        fr: "Sélectionner la translucidité - Facultatif",
        ru: "Выберите прозрачность - По желанию",
    },
    "Select Teeth's Color": {
        he: "בחר צבע שיניים",
        ch: "选择牙齿颜色",
        tu: "Diş Rengi Seç",
        fr: "Sélectionner la couleur des dents",
        ru: "Выберите цвет зубов",
    },
    "Digital Scan (Upper Jaw)": {
        he: "סריקה (לסת עליונה)",
        ch: "数字扫描(上颌)",
        tu: "Dijital Tarama (Üst Çene)",
        fr: "Scan numérique (mâchoire supérieure)",
        ru: "Цифровое сканирование (верхняя челюсть)",
    },
    "Digital Scan (Lower Jaw)": {
        he: "סריקה (לסת תחתונה)",
        ch: "数字扫描(下颌)",
        tu: "Dijital Tarama (Alt Çene)",
        fr: "Scan numérique (mâchoire inférieure)",
        ru: "Цифровое сканирование (нижняя челюсть)",
    },
    "Additional File 1": {
        he: "קובץ נספח 1",
        ch: "附加文件1",
        tu: "Ek Dosya 1",
        fr: "Fichier supplémentaire 1",
        ru: "Дополнительный файл 1",
    },
    "Additional File 2": {
        he: "קובץ נספח 2",
        ch: "附加文件2",
        tu: "Ek Dosya 2",
        fr: "Fichier supplémentaire 2",
        ru: "Дополнительный файл 2",
    },
    "Additional File 3": {
        he: "קובץ נספח 3",
        ch: "附加文件3",
        tu: "Ek Dosya 3",
        fr: "Fichier supplémentaire 3",
        ru: "Дополнительный файл 3",
    },
    "Additional File 4": {
        he: "קובץ נספח 4",
        ch: "附加文件4",
        tu: "Ek Dosya 4",
        fr: "Fichier supplémentaire 4",
        ru: "Дополнительный файл 4",
    },
    "Upper Jaw Scan Image (Optional)": {
        he: "תמונה של סריקת לסת עליונה (לא חובה)",
        ch: "上颌扫描图像(可选)",
        tu: "Üst Çene Tarama Görüntüsü (İsteğe Bağlı)",
        fr: "Image scan de la mâchoire supérieure (Facultatif)",
        ru: "Изображение сканирования верхней челюсти (по желанию)",
    },
    "Lower Jaw Scan Image (Optional)": {
        he: "תמונה של סריקת לסת תחתונה (לא חובה)",
        ch: "下颌扫描图像(可选)",
        tu: "Alt Çene Tarama Görüntüsü (İsteğe Bağlı)",
        fr: "Image scan de la mâchoire inférieure (Facultatif)",
        ru: "Изображение сканирования нижней челюсти (по желанию)",
    },
    optional: {
        he: "לא חובה",
        ch: "可选",
        tu: "isteğe bağlı",
        fr: "Facultatif",
        ru: "по желанию",
    },
    "Additional files": {
        he: "קבצים נספחים",
        ch: "附加文件",
        tu: "Ek dosyalar",
        fr: "Fichiers supplémentaires",
        ru: "Дополнительные файлы",
    },
    Documentation: {
        he: "מסמכים",
        ch: "文档",
        tu: "Belgeler",
        fr: "Documentation",
        ru: "Документация",
    },
    "Face Photos": {
        he: "תמונות פנים",
        ch: "面部照片",
        tu: "Yüz Fotoğrafları",
        fr: "Photos du visage",
        ru: "Фотографии лица",
    },
    clearaligners: {
        he: "יישור שיניים",
        ch: "隐形牙套",
        tu: "şeffaf diş telleri",
        fr: "gouttières transparentes",
        ru: "прозрачные брекеты",
    },
    Plans: {
        he: "תוכניות",
        ch: "计划",
        tu: "Planlar",
        fr: "Plans",
        ru: "Планы",
    },
    "Close Gap": {
        he: "סגירת רווח",
        ch: "闭合间隙",
        tu: "Boşluğu Kapat",
        fr: "Fermer l'espace",
        ru: "Закрытие зазора",
    },
    jaw: {
        he: "לסת",
        ch: "颌",
        tu: "çene",
        fr: "mâchoire",
        ru: "челюсть",
    },
    material: {
        he: "חומר",
        ch: "材料",
        tu: "malzeme",
        fr: "matériel",
        ru: "материал",
    },
    requests: {
        he: "בקשות",
        ch: "请求",
        tu: "istekler",
        fr: "demandes",
        ru: "запросы",
    },
    "Both Jaws": {
        he: "שתי הלסתות",
        ch: "两个颌",
        tu: "Her İki Çene",
        fr: "Les deux mâchoires",
        ru: "Обе челюсти",
    },
    "Upper Jaw": {
        he: "לסת עליונה",
        ch: "上颌",
        tu: "Üst Çene",
        fr: "Mâchoire supérieure",
        ru: "Верхняя челюсть",
    },
    "Lower Jaw": {
        he: "לסת תחתונה",
        ch: "下颌",
        tu: "Alt Çene",
        fr: "Mâchoire inférieure",
        ru: "Нижняя челюсть",
    },
    "Doctor's name": {
        he: "שם הדוקטור",
        tu: "Doktorun Adı",
        ch: "医生姓名",
        ru: "Имя доктора",
        fr: "Nom du médecin",
    },
    "Patient's Phone": {
        he: "טלפון המטופל",
        tu: "Hasta Telefonu",
        ch: "病人电话",
        ru: "Телефон пациента",
        fr: "Téléphone du patient",
    },
    "Provisional Eggshell": {
        he: "כתר זמני",
        tu: "Geçici Kabuk",
        ch: "临时外壳",
        ru: "Временная коронка",
        fr: "Couronne provisoire",
    },
    "PFM Crown": {
        he: "כתר מתכת",
        tu: "Metal Porselen Kaplama",
        ch: "金属瓷冠",
        ru: "Металлокерамическая коронка",
        fr: "Couronne PFM (Porcelaine sur Métal)",
    },
    "Full Crown": {
        he: "כתר מלא",
        tu: "Tam Kaplama",
        ch: "全冠",
        ru: "Полная коронка",
        fr: "Couronne complète",
    },
    Pontic: {
        he: "פונטיק",
        tu: "Pontik",
        ch: "假牙",
        ru: "Понтик",
        fr: "Pontique",
    },
    Onlay: {
        he: "אונליי",
        tu: "Onlay",
        ch: "嵌体",
        ru: "Онлэй",
        fr: "Onlay",
    },
    Inlay: {
        he: "אינליי",
        tu: "İnley",
        ch: "嵌体",
        ru: "Инлэй",
        fr: "Inlay",
    },
    "Implant Crown": {
        he: "כתר על שתל",
        tu: "İmplant Üstü Kaplama",
        ch: "种植冠",
        ru: "Имплантатная коронка",
        fr: "Couronne sur implant",
    },
    Veneer: {
        he: "למינייט",
        tu: "Lamine",
        ch: "贴面",
        ru: "Винир",
        fr: "Facette",
    },
    Splints: {
        he: "סדים",
        tu: "Splintler",
        ch: "矫治夹板",
        ru: "Сплинты",
        fr: "Gouttières occlusales",
    },
    "Full Dentures": {
        he: "שיניים תותבות מלאות",
        tu: "Tam Protez",
        ch: "全口义齿",
        ru: "Полные протезы",
        fr: "Prothèses dentaires complètes",
    },
    Valplast: {
        he: "ואלפלסט",
        tu: "Valplast",
        ch: "瓦尔普拉斯",
        ru: "Валпласт",
        fr: "Valplast",
    },
    "Big smile extraoral photo (full face)": {
        he: "(תמונה עם חיוך רחב  (כולל פנים",
        tu: "Geniş gülümseme dışsal fotoğraf (tam yüz)",
        ch: "大笑外部照片（全脸）",
        ru: "Фото с широкой улыбкой (полное лицо)",
        fr: "Photo grand sourire extra-orale (visage complet)",
    },
    "Smile with retractors extraoral photo (full face)": {
        he: "תמונה עם פותחן פה (כולל פנים)",
        tu: "Açıcılarla gülümseme dışsal fotoğraf (tam yüz)",
        ch: "带牵引器的微笑外部照片（全脸）",
        ru: "Улыбка с ретракторами (полное лицо)",
        fr: "Sourire avec rétracteurs photo extra-orale (visage complet)",
    },
    "Front View IntraOral Photo": {
        he: "תמונה פה חזיתית",
        tu: "Ön Görünüm Ağız İçi Fotoğraf",
        ch: "口腔前景照片",
        ru: "Фронтальное внутриротовое фото",
        fr: "Photo intra-orale de face",
    },
    "45o Right Side Intraoral Photo": {
        he: "תמונה פה ימין 45 מעלות",
        tu: "45 Derece Sağ Taraf Ağız İçi Fotoğraf",
        ch: "口腔右侧45度照片",
        ru: "Фото бокового правого ракурса (45°)",
        fr: "Photo intra-orale du côté droit à 45 degrés",
    },
    "45o Left Side Intraoral Photo": {
        he: "תמונה פה שמאל 45 מעלות",
        tu: "45 Derece Sol Taraf Ağız İçi Fotoğraf",
        ch: "口腔左侧45度照片",
        ru: "Фото бокового левого ракурса (45°)",
        fr: "Photo intra-orale du côté gauche à 45 degrés",
    },
    "Additional Notes": {
        he: "הערות נוספות",
        tu: "Ek Notlar",
        ch: "附加说明",
        ru: "Дополнительные примечания",
        fr: "Notes supplémentaires",
    },
    Summary: {
        he: "סיכום",
        tu: "Özet",
        ch: "摘要",
        ru: "Сводка",
        fr: "Résumé",
    },
    "Teeth Color": {
        he: "צבע שיניים",
        tu: "Diş Rengi",
        ch: "牙齿颜色",
        ru: "Цвет зубов",
        fr: "Couleur des dents",
    },
    LT: {
        he: "שקיפות נמוכה",
        tu: "Düşük Şeffaflık",
        ch: "低透明度",
        ru: "Низкая прозрачность",
        fr: "Basse translucidité",
    },
    MT: {
        he: "שקיפות בינונית",
        tu: "Orta Şeffaflık",
        ch: "中等透明度",
        ru: "Средняя прозрачность",
        fr: "Translucidité moyenne",
    },
    HT: {
        he: "שקיפות גבוהה",
        tu: "Yüksek Şeffaflık",
        ch: "高透明度",
        ru: "Высокая прозрачность",
        fr: "Haute translucidité",
    },
    "feldspathic - porcelain ceramic": {
        he: "בניית חרסינה",
        tu: "Feldspat - Porselen Seramik",
        ch: "长石 - 瓷陶",
        ru: "Порцелановая керамика с фельдшпатом",
        fr: "Céramique feldspathique - porcelaine",
    },
    "Feldspathic - Porcelanin Ceramic": {
        he: "בניית חרסינה",
        tu: "Feldspat - Porselen Seramik",
        ch: "长石 - 瓷陶",
        ru: "Порцелановая керамика с фельдшпатом",
        fr: "Céramique feldspathique - porcelaine",
    },
    "lithium disilicate": {
        he: "ליתיום דיסיליקט",
        tu: "Lityum Disilikat",
        ch: "二硅酸锂",
        ru: "Литиевый дисиликат",
        fr: "Disilicate de lithium",
    },
    "zirconia multilayer": {
        he: "זירקוניה רב שכבתי",
        tu: "Zirkonya Çok Katmanlı",
        ch: "氧化锆多层",
        ru: "Зубковая многослойная керамика",
        fr: "Multicouche en zircone",
    },
    pmma: {
        he: "pmma",
        tu: "pmma",
        ch: "聚甲基丙烯酸甲酯",
        ru: "ПММА",
        fr: "PMMA",
    },
    "3d printed": {
        he: "הדפסה",
        tu: "3D Baskı",
        ch: "3D 打印",
        ru: "3D печать",
        fr: "Impression 3D",
    },
    acrylic: {
        he: "אקריל",
        tu: "Akrilik",
        ch: "丙烯酸",
        ru: "Акрил",
        fr: "Acrylique",
    },
    bridge: {
        he: "גשר",
        tu: "Köprü",
        ch: "桥梁",
        ru: "Мостик",
        fr: "Pont",
    },
    unit: {
        he: "בודד",
        tu: "Birim",
        ch: "单位",
        ru: "Единица",
        fr: "Unité",
    },
    retainer: {
        he: "קיבוע אורטודונטי",
        tu: "Retainer",
        ch: "保持器",
        ru: "Ретейнер",
        fr: "Gouttière de contention",
    },
    "night guard": {
        he: "סד לילה",
        tu: "Gece Muhafızı",
        ch: "夜间护卫",
        ru: "Ночная защита",
        fr: "Gouttière de protection nocturne",
    },
    "whitening guard": {
        he: "סד הלבנה",
        tu: "Beyazlatma Muhafızı",
        ch: "美白护卫",
        ru: "Отбеливающая защита",
        fr: "Gouttière de blanchiment",
    },
    Scans: {
        he: "סריקות",
        fr: "Numérisations",
        tu: "Taramalar",
        ru: "Сканирования",
        ch: "扫描",
    },

    "Intraoral Images": {
        he: "תמונות אינטרה-אוראליות",
        fr: "Images intra-orales",
        tu: "Ağız içi görüntüler",
        ru: "Внутриротовые снимки",
        ch: "牙内图像",
    },

    "Intraoral Image 1": {
        he: "תמונה אינטרה-אוראלית 1",
        fr: "Image intra-orale 1",
        tu: "Ağız içi görüntü 1",
        ru: "Внутриротовой снимок 1",
        ch: "牙内图像1",
    },

    "Intraoral Image 2": {
        he: "תמונה אינטרה-אוראלית 2",
        fr: "Image intra-orale 2",
        tu: "Ağız içi görüntü 2",
        ru: "Внутриротовой снимок 2",
        ch: "牙内图像2",
    },

    "Intraoral Image 3": {
        he: "תמונה אינטרה-אוראלית 3",
        fr: "Image intra-orale 3",
        tu: "Ağız içi görüntü 3",
        ru: "Внутриротовой снимок 3",
        ch: "牙内图像3",
    },

    "Intraoral Image 4": {
        he: "תמונה אינטרה-אוראלית 4",
        fr: "Image intra-orale 4",
        tu: "Ağız içi görüntü 4",
        ru: "Внутриротовой снимок 4",
        ch: "牙内图像4",
    },

    "Intraoral Image 5": {
        he: "תמונה אינטרה-אוראלית 5",
        fr: "Image intra-orale 5",
        tu: "Ağız içi görüntü 5",
        ru: "Внутриротовой снимок 5",
        ch: "牙内图像5",
    },

    "Intraoral Image 6": {
        he: "6 אינטרה-אוראלית 1",
        fr: "Image intra-orale 6",
        tu: "Ağız içi görüntü 6",
        ru: "Внутриротовой снимок 6",
        ch: "牙内图像6",
    },

    "Intraoral Image 7": {
        he: "תמונה אינטרה-אוראלית 7",
        fr: "Image intra-orale 7",
        tu: "Ağız içi görüntü 7",
        ru: "Внутриротовой снимок 7",
        ch: "牙内图像7",
    },

    "Intraoral Image 8": {
        he: "8 אינטרה-אוראלית 1",
        fr: "Image intra-orale 8",
        tu: "Ağız içi görüntü 8",
        ru: "Внутриротовой снимок 8",
        ch: "牙内图像8",
    },

    "Panoramic Image": {
        he: "תמונה פנורמית",
        fr: "Image panoramique",
        tu: "Panaromik görüntü",
        ru: "Панорамный снимок",
        ch: "全景图像",
    },

    "Sefalometric Image": {
        he: "תמונה צפלומטרית",
        fr: "Image céphalométrique",
        tu: "Sefalometrik görüntü",
        ru: "Цефалометрический снимок",
        ch: "头影像",
    },

    "Case Details": {
        he: "פרטי התיק",
        fr: "Détails du dossier",
        tu: "Dosya detayları",
        ru: "Детали дела",
        ch: "病例详情",
    },

    Conditions: {
        he: "מצבים",
        fr: "Conditions",
        tu: "Durumlar",
        ru: "Условия",
        ch: "状况",
    },

    "Open Bite": {
        he: "מנשך פתוח",
        fr: "Morsure ouverte",
        tu: "Açık kapanış",
        ru: "Открытый прикус",
        ch: "开咬",
    },

    "Cross Bite": {
        he: "מנשך מוצלב",
        fr: "Morsure croisée",
        tu: "Çapraz kapanış",
        ru: "Перекрестный прикус",
        ch: "反切牙合",
    },

    "Over Bite": {
        he: "מנשך עמוק",
        fr: "Surplomb accentué",
        tu: "Derin kapanış",
        ru: "Глубокий прикус",
        ch: "深覆合",
    },

    "Under Bite": {
        he: "מנשך הפוך",
        fr: "Prognathisme",
        tu: "Ters kapanış",
        ru: "Прогенический прикус",
        ch: "下牙合",
    },

    Spacing: {
        he: "רווחים",
        fr: "Espaces",
        tu: "Aralıklar",
        ru: "Промежутки",
        ch: "间隙",
    },

    Crowding: {
        he: "צפיפות",
        fr: "Encombrement",
        tu: "Sıkışıklık",
        ru: "Скученность",
        ch: "拥挤",
    },

    "Class Status": {
        he: "סטטוס של קלאס",
        fr: "Classe",
        tu: "Sınıf durumu",
        ru: "Статус класса",
        ch: "分类状态",
    },

    "Class 1": {
        he: "קלאס 1",
        fr: "Classe 1",
        tu: "Sınıf 1",
        ru: "Класс 1",
        ch: "一类牙合",
    },

    "Class 2": {
        he: "קלאס 2",
        fr: "Classe 2",
        tu: "Sınıf 2",
        ru: "Класс 2",
        ch: "二类牙合",
    },

    "Class 3": {
        he: "קלאס 3",
        fr: "Classe 3",
        tu: "Sınıf 3",
        ru: "Класс 3",
        ch: "三类牙合",
    },

    "Fix Bite": {
        he: "תיקון מנשך",
        fr: "Correction de la morsure",
        tu: "Kapanış düzeltme",
        ru: "Исправление прикуса",
        ch: "修正牙合",
    },

    "Fix Contacts": {
        he: "תיקון נקודות מגע",
        fr: "Correction des contacts",
        tu: "Kontak noktalarının düzeltilmesi",
        ru: "Исправление контактов",
        ch: "调整接触点",
    },

    "Align Teeths": {
        he: "יישור שיניים",
        fr: "Alignment des dents",
        tu: "Dişlerin hizalanması",
        ru: "Выравнивание зубов",
        ch: "排齐牙齿",
    },

    Additionals: {
        he: "תוספות",
        fr: "Suppléments",
        tu: "Ekstralar",
        ru: "Дополнения",
        ch: "补充",
    },

    Attachments: {
        he: "אטאצ'מנטים",
        fr: "Attaches",
        tu: "Ek parçalar",
        ru: "Аттачменты",
        ch: "附件",
    },

    IPR: {
        he: "סטריפינג",
        fr: "IPR",
        tu: "Diş arası tıraşlama",
        ru: "Межзубное пространство",
        ch: "牙间成形",
    },

    Elastics: {
        he: "גומיה אלסטית",
        fr: "Élastiques",
        tu: "Elastikler",
        ru: "Эластики",
        ch: "橡皮筋",
    },

    Miniscrews: {
        he: "ברגי עיגון",
        fr: "Mini-vis",
        tu: "Minividalar",
        ru: "Мини-винты",
        ch: "微型植入螺丝",
    },

    "Extraction Wisdom": {
        he: "עקירת שן",
        fr: "Extraction des dents de sagesse",
        tu: "Azı dişi çekimi",
        ru: "Удаление зуба мудрости",
        ch: "拔除阻生齿",
    },

    "Add Plan": {
        he: "הוספת תכנית",
        fr: "Ajouter un plan",
        tu: "Plan ekle",
        ru: "Добавить план",
        ch: "添加治疗计划",
    },

    Notes: {
        he: "הערות",
        fr: "Notes",
        tu: "Notlar",
        ru: "Примечания",
        ch: "注释",
    },

    "There are no registeration requests at the moment": {
        he: "אין בקשות הרשמה כרגע",
        fr: "Il n'y a aucune demande d'inscription pour le moment",
        tu: "Şu anda kayıt talebi yok",
        ru: "В данный момент нет запросов на регистрацию",
        ch: "目前没有注册申请",
    },

    "Registeration Requests": {
        he: "בקשות הרשמה",
        fr: "Demandes d'inscription",
        tu: "Kayıt talepleri",
        ru: "Запросы на регистрацию",
        ch: "注册申请",
    },
    Shipping: {
        he: "משלוחים",
        fr: "Expédition",
        tu: "Kargo",
        ru: "Доставка",
        ch: "运输",
    },
    "New Shipping": {
        he: "משלוח חדש",
        fr: "Nouvelle expédition",
        tu: "Yeni kargo",
        ru: "Новая доставка",
        ch: "新的运输",
    },
    "No shippings yet": {
        he: "אין משלוחים עדיין",
        fr: "Pas encore d'expéditions",
        tu: "Henüz kargo yok",
        ru: "Пока нет доставок",
        ch: "暂无运输",
    },
    Recieved: {
        he: "התקבל",
        fr: "Reçu",
        tu: "Alındı",
        ru: "Получено",
        ch: "已收到",
    },
    Redesign: {
        he: "תכנון מחדש",
        fr: "Redesign",
        tu: "Yeniden tasarım",
        ru: "Переработка",
        ch: "重新设计",
    },
    "Choose clear aligners case": {
        he: "בחר תיק יישור שיניים",
        fr: "Choisissez un étui d'aligneurs clairs",
        tu: "Net düzeltici kılıfı seçin",
        ru: "Выберите чехол для прозрачных брекетов",
        ch: "选择透明牙套盒",
    },
    "Choose prosthesis case": {
        he: "בחר תיק פרותטיקה",
        fr: "Choisissez un étui de prothèse",
        tu: "Protez kılıfı seçin",
        ru: "Выберите чехол для протеза",
        ch: "选择义齿盒",
    },
    "Additional File (Optional)": {
        he: "קובץ נספח (לא חובה)",
        fr: "Fichier supplémentaire (facultatif)",
        tu: "Ek dosya (isteğe bağlı)",
        ru: "Дополнительный файл (необязательно)",
        ch: "附加文件（可选）",
    },
    "Add/Edit Shipping": {
        he: "הוסף/ערוך משלוח",
        fr: "Ajouter/Modifier l'expédition",
        tu: "Kargo Ekle/Düzenle",
        ru: "Добавить/Изменить доставку",
        ch: "添加/编辑运输",
    },
    "Change Password": {
        he: "שנה סיסמא",
        fr: "Changer le mot de passe",
        tu: "Şifre değiştir",
        ru: "Изменить пароль",
        ch: "更改密码",
    },
    "Old Password": {
        he: "סיסמא ישנה",
        fr: "Ancien mot de passe",
        tu: "Eski şifre",
        ru: "Старый пароль",
        ch: "旧密码",
    },
    "Confirm New Password": {
        he: "אשר סיסמא חדשה",
        fr: "Confirmer le nouveau mot de passe",
        tu: "Yeni şifreyi onaylayın",
        ru: "Подтвердите новый пароль",
        ch: "确认新密码",
    },
    "New Password": {
        he: "סיסמא חדשה",
        fr: "Nouveau mot de passe",
        tu: "Yeni şifre",
        ru: "Новый пароль",
        ch: "新密码",
    },
    Cancle: {
        he: "בטל",
        fr: "Annuler",
        tu: "İptal",
        ru: "Отмена",
        ch: "取消",
    },
    OK: {
        he: "אישור",
        fr: "OK",
        tu: "Tamam",
        ru: "OK",
        ch: "好的",
    },
    WhatsApp: {
        he: "וואטסאפ",
        fr: "WhatsApp",
        tu: "WhatsApp",
        ru: "WhatsApp",
        ch: "WhatsApp",
    },
    Search: {
        he: "חיפוש",
        fr: "Recherche",
        tu: "Arama",
        ru: "Поиск",
        ch: "搜索",
    },
    "Type message": {
        he: "הקלד הודעה",
        fr: "Tapez un message",
        tu: "Mesaj yazın",
        ru: "Введите сообщение",
        ch: "输入消息",
    },
    English: {
        he: "אנגלית",
        fr: "Anglais",
        tu: "İngilizce",
        ru: "Английский",
        ch: "英语",
    },
    Chinese: {
        he: "סינית",
        fr: "Chinois",
        tu: "Çince",
        ru: "Китайский",
        ch: "中文",
    },
    Turkish: {
        he: "טורקית",
        fr: "Turc",
        tu: "Türkçe",
        ru: "Турецкий",
        ch: "土耳其语",
    },
    France: {
        he: "צרפתית",
        fr: "Français",
        tu: "Fransızca",
        ru: "Французский",
        ch: "法语",
    },
    Russian: {
        he: "רוסית",
        fr: "Russe",
        tu: "Rusça",
        ru: "Русский",
        ch: "俄语",
    },
    "Sort By": {
        he: "סדר לפי",
        fr: "Trier par",
        tu: "Sırala",
        ru: "Сортировать по",
        ch: "排序方式",
    },
    "Tracking Number": {
        he: "מספר מעקב",
        fr: "Numéro de suivi",
        tu: "Takip numarası",
        ru: "Номер отслеживания",
        ch: "追踪编号",
    },
    "Steel Retainer": {
        he: "קיבוע ברזל",
        fr: "Attache en acier",
        tu: "Çelik tutucu",
        ru: "Стальной фиксатор",
        ch: "钢制固定器",
    },
    "Splint Retainer": {
        he: "קיבוע סד",
        fr: "Attache d'éclisse",
        tu: "Atel retaineri",
        ru: "Фиксатор шины",
        ch: "夹板固定器",
    },
    Track: {
        he: "מעקב",
        fr: "Suivre",
        tu: "Takip etmek",
        ru: "Отслеживать",
        ch: "跟踪",
    },
    "Shipping Status": {
        he: "סטטוס משלוח",
        fr: "Statut de livraison",
        tu: "Gönderi Durumu",
        ru: "Статус доставки",
        ch: "运输状态",
    },
    "On The Way": {
        he: "בדרך",
        fr: "En cours de route",
        tu: "Yolda",
        ru: "В пути",
        ch: "在途中",
    },
    "On Customs Hold": {
        he: "מתעכב במכס",
        fr: "En attente en douane",
        tu: "Gümrükte bekliyor",
        ru: "На таможенном контроле",
        ch: "海关扣留中",
    },
    "Waiting For Redesign": {
        he: "מחכה לתכנון חוזר",
        fr: "En attente de réaménagement",
        tu: "Yeniden tasarım bekleniyor",
        ru: "Ожидание переработки",
        ch: "等待重新设计",
    },
    "Additional File": {
        he: "קובץ נספח",
    },
};

export default languages;
