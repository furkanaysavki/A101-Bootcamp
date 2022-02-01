# NoSQL ile SQL Arasındaki Farklar

## Veri Depolama Yöntemleri

Sql veritabanları sabit satır ve sütunlara sahip tabloları ilişkilendirerek verileri depolarken Nosql veritabanlarının birden fazla veri depolama yöntemi vardır. Bunlar doküman oluşturma, anahtar-değer çiftleri oluşturma, dinamik sütun ve satıra sahip tablolar oluşturma ya da grafik oluşturma şeklinde özetlenebilir.

![](https://miro.medium.com/max/998/1*8cFTeBVP4WnbhTNd0IzCdA.jpeg)

## Veritabanı Şemaları

İlişkisel veritabanları, veritabanı şemasını ihtiyaçlarınıza yönelik önceden tanımlamanızı ister ve daha sonra tablolar arasındaki ilişkileri kurmanızı bekler. Oldukça katı bir yapıya sahip olduğunu söyleyebiliriz. Bir diğer yandan, ilişkisel olmayan veritabanları ise oldukça esnek ve dinamik bir yapıya sahiptir. Önceden bir şema oluşturmanıza gerek yoktur. İhtiyaçlarınız değiştikçe veritabanı üzerinde değişiklik yapmanız kolaydır. Şemanız dokümandan dokümana değişebilir.

## Ölçeklenebilirlik

Büyük veri karşısında iki tip veritabanının da ölçekleme çözümleri farklıdır. Sql veritabanları dikey ölçekleme yapısına sahiptir. Yeni veri geldikçe depolama alanınızı kapasitesi daha büyük olan sunuculara taşımanız gerekmektedir ve bu durum size gittikçe pahalıya mal olmaktadır. Onun yerine, NoSql veritabanları ise yatay ölçekleme yapısına sahiptir. Yani yeni verileri farklı depolama alanlarına bölerek tutarsınız. Bu yaklaşım hem daha ucuzdur hem de verilere ulaşma konusunda size hız kazandırır.
