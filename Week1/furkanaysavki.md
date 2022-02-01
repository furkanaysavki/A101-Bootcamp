# JavaScript nedir?

JavaScript temel olarak, daha önce yalnızca istemci tarafı programlama kurallarına uyan bir komut dosyası dili olarak adlandırılıyordu. Ancak şimdi (Node.js girdikten sonra), sunucu tarafı programlama için bile kullanılabilir. Hem web tarayıcısında hem de web sunucusunda çalışır. JavaScript, kodumuzun tarayıcıyla etkileşime girmesini sağlar ve hatta hem HTML hem de CSS’yi değiştirebilir veya güncelleyebilir. JavaScript’i REST API’leri, XML vb. ile kullanabilseniz de, uygulamalar veya büyük karmaşık sistemler geliştirmek için tasarlanmamıştır, ancak bugünlerde bu alanlara girmektedir. JavaScript büyürken, kodu Nesne yönelimli programlamanın gerekliliklerini bile yerine getiremeyecek kadar ağır ve karmaşık hale gelir. Bu, JavaScript’in sunucu tarafı dili ve çoklu görevli olarak daha da büyümesini sınırladı. Ve bu, sorunların üstesinden gelmek için Microsoft TypeScript’in ortaya çıkmasını sağladı.

# TypeScript nedir?

Typescript, Javascript dilinin geliştirilmiş bir sürümüdür. Node.js ortamında veya ECMAScript 3 veya üstünü destekleyen herhangi bir web tarayıcısında çalışabilir. TypeScript isteğe bağlı statik yazma, sınıflar ve arabirim sağlayan statik olarak derlenmiş bir dildir. Basit ve temiz JavaScript kodu yazmanıza olanak sağlar. Bu nedenle, TypeScript’i kullanmak, daha kolay konuşlandırılabilir ve daha sağlam bir yazılım oluşturmanıza yardımcı olabilir.

# TypeScript'in Avantajları

- TypeScript kolay kod gezinme, hata önleme ve kodun korunmasını sağlar.
- Statik Tip ek açıklama veya Statik Yazma özelliğini destekler.
- Ayrıca arayüzleri, alt arayüzleri, sınıfları, alt sınıfları ve ECMAScript 6 veya ES6’yı destekler.
- Özel üyelerin ve arayüzlerin mirası ile nesne yönelimli programlama yetenekleri ile birlikte gelir.
- Zengin IDE’ler Mevcuttur

# JavaScript'in Avantajları

- JavaScript, Microsoft ve Mozilla gibi efsanelerin desteklediği açık kaynaklı, esnek ve güçlü bir dildir.
- Hem istemci hem de sunucu tarafı için kullanılabilir.
- Sınıfları, arayüzleri ve modülleri destekler.
- Küçük scriptler için özel olarak tasarlanmıştır.
- Platformlar arası bir dil.
- Güçlü Test İş Akışı ve bağımlılık desteği sağlar.

# TypeScript ve JavaScript Farkları

- TS nesne yönelimli program dilidir, JS betik dilidir.
- TS statik veri tiplemesine sahiptir, JS dinamik olarak verileri tanır.
- TS opsiyonel olarak parametreli fonksiyonları destekler ancak JS desteklemez.
- TS ile JS olarak tasarlanmış büyük ve karmaşık projelerin geliştirme aşaması çok daha kısa sürelere indirilebilir.
- JS kodu derlenmediği için hata denetimi yapılamaz ancak TS kodunda derleme yapıldığı için bu aşama zaman alır. Tüm geliştirme aşaması göze alındığında sorun teşkil edecek bir dezavantaj değildir.
- TS soyut sınıfları desteklemez.

# WEB SUNUCUSU OLUŞTURMAK

Node.js ile bir web sunucusu oluşturmanın çeşitli yolları vardır ve burada başlangıç olarak Node.js çekirdek modülü olan "http" modülünü kullanacağız. server.js dosyası oluşturup önce bu modül çağırılır.

   
```
const http = require('http');
```

http modülü ile bir web sunucusu oluşturmak için createServer metodunu kullanacağız. createServer metodu, callback fonksiyon parametreleri olarak request ve response nesnelerini alır.

```
const server = http.createServer((req, res)=> {
console.log('Bir istek gönderildi.');  // burada isteğimizin gönderildiğini simüle ediyoruz.
});
```

Portu belirtip ilgili portu dinlemeye başlayalım.

```
const port = 3000;
server.listen(port, () => {
console.log(`Sunucu port ${port} de başlatıldı.`);
 });
```

Tarayıcımıza http://localhost:3000/ yazdığımızda, tarayıcımızın çalışmaya başladığını ancak bir geri dönüş olmadığını farkederiz. Burada sorun şudur, sunucumuzu çalıştırdık, isteğimizi gönderdik ama bu isteğimize verilen bir cevap yok! createServer metodunu şu şekilde düzenlersek req - res döngüsünü tamamlamış oluruz.

```
const server = http.createServer((req, res)=> {
console.log('Bir istek gönderildi.');  // burada isteğimizin gönderildiğini simüle ediyoruz.
res.write('MERHABA');                  // tarayıcıda MERHABA çıktısını göreceğiz.
res.end();
});
```

## EXPRESS İLE SUNUCU YAZMAK

Express.js, Node.js üzerine yazılmış bir web çatısıdır. Express paketini indireceğiz, bunu yapmak için öncelikle package.json dosyasını oluşturalım.

```
npm init
```
express paketini indirmek için ise

```
npm i express
```

komutunu kullanacağız. Sonrasında express modülünü kullanımımıza çağıracağız ve express() fonksiyonunu bir app değişkenine atayacağız.

```
const express = require('express')
const app = express()
```

Yönlendirmeler için ise kod akışını zorlaştıran if koşulu yazımına göre değil app.method(PATH, HANDLER) yapısını kullanacağız. Burada

- app, express() fonksiyonunun atandığı değişken.
- metot http request metodları, çoğunlukla (get, post)
- path, sunucu yolu
- HANDLER ise yönlendirme eşleştiğinde çağırılacak fonksiyon.

Yukarıda belirttiğimiz özellikleri kullanarak kodumuzu aşağıdaki gibi güncelleyebiliriz.

```
const express = require('express')
const app = express()
app.get('/', (req, res) => {
res.status(200).send('INDEX SAYFASI')
})
app.get('/about', (req, res) => {
res.status(200).send('ABOUT SAYFASI')
})
app.get('/contact', (req, res) => {
res.status(200).send('CONTACT SAYFASI')
})
const port = 3000;
app.listen(port, ()=> {
console.log(`Sunucu port ${port} da çalışmaya başladı...`)
})
```
