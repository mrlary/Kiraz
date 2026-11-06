### Kiraz 

Kiraz projesi hizmet vermek isteyenler ile hizmet almak isteyenleri bir araya getirir

### Projenin içeriği 
*   Kullanıcı ve Hizmet Veren Profilleri:** İki farklı kullanıcı tipi için (Müşteri ve Hizmet Veren) özelleştirilmiş kayıt ve giriş panelleri.
*   Dinamik Talep Oluşturma Sihirbazı:** İhtiyaca yönelik (örn: Boya badana, temizlik, nakliye) detaylı soru-cevap formları.
*   Akıllı Eşleştirme ve Teklif Sistemi:** Oluşturulan taleplerin ilgili kategorideki hizmet verenlere bildirilmesi ve teklif verme süreci.


# Todo List 
* admin rolü site içindeki alt  adminler olucak yani yöneticiler kullanıcıların hareketlerini denetleyebilcek böyle bir şey ekle
* web_admin rolünü db den tanımla ve ona ayrı bir panel ver herkesi herşeyi yönetebilsin site içindeki dönen tüm olayları
* admin - provider - user yönlendirmelerine bir doğrulama ekle gerçekten o role sahip user login olup o mu gitti ona göre http response kodları döndürür diye düşünüyorum dondürmezse ayarlarız yüksek ihtimal session_id yada cookie eklicez bakalım görecez
* frontend kısmı en son hallet 
*  paneller tamamlanınca userlar ilan açıcak providerlar ilanlara fiyat teklif etcek userlar uygun olan fiyat ile anlaşcak 
* tüm rollere sahip web_admin harici telefon numarası ve adres bilgileri alıncak ilanlarda userın adress bilgisi otomatik çekilip ilan açana koyulcak detaylandırılmak istenirse kullanıcılar birden fazla address ekleyebilicek nasıl yaparız fikrim yok ama hallederiz
* userlar ilan açarken ilanın bir etiketi olucak providerlarda kendi etikelerini belirlemek zorunda elektirikçi yazılım özelders gibi
* providerlar adress bilgilerine göre belki googlemaps api yi kullanılarak falan aktif adresslerde kendi alanları hakkında en yakın adresine görebilir böyle bir sıralama oluşturulabilir
* ilan açan userlar ilanı alan providera rating vercek yıldız sistemi 1-5 arası
* providerlarda kendi alanları hakkında ilan açılırsa bildirim gelicek 
* adminler uygunsuz gördükleri ilanları kullanıcıları providerları yasaklama yetkisine sahip olucak kullanıcı 5 kere yasaklanırsa sistem kullanıcının kaydını silicek adminler ilanları silme yetkisine sahip olucak silinme nedeni belirtilmek zorunda web_admin adminlerin hesaplarını silme düzenleme ve yeni admin ekleme yetkilerine sahip olucak
* web_admin kendi panelinde sistemdeki aktif ilan sayısı aktif kullanıcı sayısı aktif provider sayısı aktif admin sayısı ve bu saydıklarımın toplamını görücek vakit kalırsa bu alan dahada detaylandırılabilir
