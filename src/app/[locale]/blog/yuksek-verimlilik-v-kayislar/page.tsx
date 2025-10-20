import type {Metadata} from 'next';
import Image from 'next/image';
import {setRequestLocale} from 'next-intl/server';

import {Header} from '@/components/sections/Header';

type BlogPageProps = {
  params: {locale: string};
};

export const metadata: Metadata = {
  title: 'Yüksek Verimlilik İçin Güç Aktarım Sistemlerinde Yeni Nesil V-Kayışlar',
  description:
    'Yeni nesil V-kayış malzemeleri, enerji verimliliği stratejileri ve dijital bakım yaklaşımları ile güç aktarım hatlarını optimize ediyoruz.'
};

export default function YuksekVerimlilikVKayislarPage({params}: BlogPageProps): JSX.Element {
  setRequestLocale(params.locale);

  return (
    <main className="w-full bg-white">
      <section className="relative w-full bg-[#0B0B0C] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/blog1.webp"
            alt="Yüksek verimli yeni nesil V-kayışlar ile çalışan endüstriyel üretim hattı"
            fill
            priority
            className="object-cover opacity-70 brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>
        <div className="relative max-w-[1080px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="absolute top-6 left-1/2 z-40 w-full max-w-[920px] -translate-x-1/2 px-4">
            <Header />
          </div>
          <div className="pt-24 lg:pt-28 space-y-6 max-w-3xl">
            <div
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A24B]"
              style={{fontFamily: 'Manrope, sans-serif'}}
            >
              <span>Ürün İnovasyonu</span>
              <span className="w-10 h-px bg-[#C9A24B]/50" />
              <span>Güç Aktarım Sistemleri</span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{fontFamily: 'Manrope, sans-serif'}}
            >
              Yüksek Verimlilik İçin Güç Aktarım Sistemlerinde Yeni Nesil V-Kayışlar
            </h1>
            <p className="text-sm md:text-base text-white/75" style={{fontFamily: 'Manrope, sans-serif'}}>
              MillerSan Ürün ve Mühendislik Ekibi
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[960px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <article className="space-y-12 text-[#2B2B2B]" style={{fontFamily: 'Manrope, sans-serif'}}>
          <section className="space-y-6 text-lg leading-relaxed text-[#2B2B2B]/90">
            <p>
              Enerji verimliliği odaklı üretim hatlarında güç aktarım elemanlarının performansı, toplam işletme maliyetinin kaderini belirliyor.
              Yeni nesil V-kayış tasarımları; yüksek elastomer stabilitesi, nano dolgulu kord yapıları ve sürtünmeyi minimize eden kaplamaları
              sayesinde klasik V-kayışlara kıyasla %3–5 arası ekstra verimlilik kazancı sunuyor. Bu yazıda, MillerSan’ın son seri kayışlarının
              hangi mühendislik güncellemeleriyle bu kazanımı sağladığını ele alıyoruz.
            </p>
            <p>
              Yalnızca malzeme inovasyonu değil, kayış profilinin makine parkına doğru uyarlanması ve dijital bakım süreçleri ile
              desteklenmesi de performansın sürdürülebilirliği açısından kritik. Tasarımdan devreye almaya kadar her aşamada doğru parametreyi
              seçmek, kayışın ömrünü iki kata kadar uzatabiliyor.
            </p>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr] items-start">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1F1F20]">Enerji Verimliliği İçin Malzeme Güncellemeleri</h2>
              <p className="text-lg leading-relaxed text-[#4F4F4F]">
                Yeni formülasyonda kullanılan HNBR bazlı elastomer, çalışma sıcaklığını 120°C seviyesine kadar güvenli biçimde taşıyor ve
                kayışın mikro çatlaklara karşı direncini artırıyor. Kevlar destekli kord yapıları kayışın esneme davranışını dengeliyor;
                bu da ilk montaj geriliminin daha uzun süre korunmasını sağlıyor.
              </p>
              <p className="text-lg leading-relaxed text-[#4F4F4F]">
                Sürtünmeyi azaltan PTFE katkılı dış kaplama, kasnak üzerinde mikro film tabakası oluşturarak ısı üretimini düşürüyor. Bu sayede
                kayış-kasnak temasındaki güç kayıpları önemli ölçüde azalıyor, titreşim kaynaklı gürültü ise %18’e kadar geriliyor.
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#4F4F4F]">
                <li>Genişletilmiş sıcaklık aralığı, ağır hizmet hatlarında planlı bakım aralığını 2 kat uzatır.</li>
                <li>Yeni kord tasarımı, ilk 1000 çalıştırma saatinde gerilim kaybını %35 azaltır.</li>
                <li>PTFE kaplama sayesinde kasnak yüzeyinde oluşan pitting riski minimuma iner.</li>
              </ul>
            </div>
            <div className="relative h-[540px] lg:h-[600px] overflow-hidden rounded-3xl">
              <Image
                src="/images/blogimg2.jpg"
                alt="Yeni nesil V-kayış malzemelerinin laboratuvar testleri"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section className="space-y-6">
            <blockquote className="border-l-4 border-[#C9A24B] bg-[#FBF8F1] text-[#1F1F1F] text-lg italic leading-relaxed px-6 py-4 rounded-2xl">
              “Kayışın malzeme reformu tek başına yetmez; doğru gerilim yönetimi ve veri destekli bakım olmazsa verimlilik kazanımı erir.”
            </blockquote>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              Bu nedenle MillerSan ekipleri, sahaya çıkan her kayış setinde sensör tabanlı gerilim izlemeyi öneriyor. Dijital izleme sayesinde
              kayışların frekans yanıtı anlık kontrol ediliyor ve beklenmeyen duruşlara yol açabilecek gerilim kayıpları daha oluşmadan gideriliyor.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F1F20]">Sistem Entegrasyonunda Dikkat Edilecek Noktalar</h2>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              Yeni nesil kayışların performansı, kasnak geometrisi ile tam uyumlu olduğunda zirveye çıkıyor. Bu nedenle projelerde, kasnak
              pürüzlülüğü Ra &lt; 1.6 µm değerine çekiliyor ve kanal toleransları ISO 4183 standardına göre yeniden açılıyor. Kurulum sırasında
              lazer hizalama ve dinamik gerilim eşitleme tercih ediliyor.
            </p>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              Otomasyon tarafında ise Lenis entegre hız profilleri ile senkronize çalışan kayışlar, ani yük değişimlerine hızlı tepki veriyor.
              Böylece yüksek tork isteyen proseslerde kayış kayması engelleniyor ve enerji sarfiyatı stabil kalıyor.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F1F20]">Veri Destekli Bakım Yaklaşımları</h2>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              IoT tabanlı bakım platformu sayesinde kayışların sıcaklık, gerilim ve vibrasyon değerleri gerçek zamanlı izleniyor. Algoritma,
              eşik değer aşımlarında bakım ekiplerini otomatik olarak uyarıyor ve Video-LARP formatındaki adım adım bakım prosedürlerini
              erişime açıyor. Bu sayede beklenmeyen duruşların %28 oranında azaldığını gözlemledik.
            </p>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              Tahmine dayalı bakım modelinde, kayışın akustik imzası üzerinden kalan ömür tahmini yapılıyor. Yüksek frekanslı ses analizi,
              mil hizasındaki sapmaları ve kasnak balans sorunlarını kayış yıpranmadan önce saptıyor.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F1F20]">Saha Başarı Hikâyeleri</h2>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              Orta ölçekli bir çimento fabrikasında, yeni kayış seti ve dijital izleme paketi ile iki ay içinde enerji tüketimi %4,8
              düşürüldü. Aynı projede kayış ömrü 14 aydan 27 aya yükseldi. Bir gıda üretim tesisinde ise yüksek hijyen gereksinimleri
              nedeniyle paslanmaz kasnak üzerine özel kaplama uygulandı; kayışın temizlik sonrası performansında kayıp yaşanmadı.
            </p>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              Otomotiv tedarik zincirindeki bir müşterimiz, aynı hat üzerinde üç farklı hız profilini tek kayış sistemiyle yönetebilmek için
              Flip tabanlı hızlı gerilim ayar modülü kullandı. Bu çözüm, setup sürelerini %40 azaltarak hat esnekliğini artırdı.
            </p>
          </section>

          <section className="space-y-6 text-lg leading-relaxed text-[#4F4F4F]">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F1F20]">Sonuç: Sürdürülebilir Verimlilik İçin V-Kayışların Rolü</h2>
            <p>
              Yeni nesil V-kayışlar yalnızca mekanik bir bileşen değil, sürdürülebilir üretim stratejisinin anahtar parçalarından biri haline
              geliyor. Uygulama sürecinde doğru malzeme seçimi, kasnak revizyonu ve dijital bakım üçlüsü birlikte düşünüldüğünde enerji
              verimliliği kazanımları kalıcı hale geliyor.
            </p>
            <p>
              MillerSan mühendislik ekibi, her projeye özel konfigürasyon ve devreye alma desteği sunarak kayış performansının yaşam döngüsü
              boyunca izlenmesini sağlıyor. Böylece işletmeler, güç aktarım hatlarını güvenle ölçeklendirirken karbon ayak izlerini de
              düşürebiliyor.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
