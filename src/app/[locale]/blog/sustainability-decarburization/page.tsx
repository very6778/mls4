import type {Metadata} from 'next';
import Image from 'next/image';
import {setRequestLocale} from 'next-intl/server';

import {Header} from '@/components/sections/Header';

type BlogPageProps = {
  params: {locale: string};
};

export const metadata: Metadata = {
  title: 'Sürdürülebilirlik ve Karbonsuzlaştırma: Emtia Tüccarları İçin Nelerin İşe Yaradığı',
  description:
    'İsviçre tahıl ticaretinin merkezi konumunda, yeni sürdürülebilirlik ve karbonsuzlaştırma kuralları ticareti nasıl etkiliyor ve rekabetçiliği korurken gıda güvenliği nasıl sağlanabilir?'
};

export default function EndustriyelUretimHatlariVKayislarPage({params}: BlogPageProps): JSX.Element {
  setRequestLocale(params.locale);

  return (
    <main className="w-full bg-white">
      <section className="relative w-full bg-[#0B0B0C] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/blog2.webp"
            alt="Sürdürülebilirlik ve karbonsuzlaştırma emtia ticaretinde"
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
              <span>Sürdürülebilirlik</span>
              <span className="w-10 h-px bg-[#C9A24B]/50" />
              <span>Küresel Ticaret</span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{fontFamily: 'Manrope, sans-serif'}}
            >
              Sürdürülebilirlik ve Karbonsuzlaştırma: Emtia Tüccarları İçin Nelerin İşe Yaradığı
            </h1>
            <p className="text-sm md:text-base text-white/75" style={{fontFamily: 'Manrope, sans-serif'}}>
              Gaël Coronel - SUISSENÉGOCE Düzenleme ve Kamu İşleri Sorumlusu
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[960px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <article className="space-y-12 text-[#2B2B2B]" style={{fontFamily: 'Manrope, sans-serif'}}>
          <section className="space-y-6 text-lg leading-relaxed text-[#2B2B2B]/90">
            <p>
              İsviçre, küresel tahıl ticaretinin merkezi konumundadır. Yeni sürdürülebilirlik ve karbonsuzlaştırma 
              kuralları devreye girerken, ticareti sürdürmek ve gıda güvenliğini sağlamak için rekabetçiliği ezmeden 
              ne gerekecek?
            </p>
            <p>
              İsviçre, birçok önde gelen tahıl tüccarının genel merkezine veya büyük ofislerine ev sahipliği yaparak 
              emtia ticaretinde birincil bir merkez konumundadır. Ticaret faaliyetlerinin İsviçre GSYİH’sının yaklaşık 
              %10’unu oluşturduğu tahmin edilmekte ve küresel ticari gemi hareketlerinin %22’sinden fazlası 
              İsviçre merkezli tüccarlar tarafından işletilmektedir—tahıl tüccarları bu rakamların önemli bir 
              itici gücüdür.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F1F20]">İsviçre’nin Ticaret Merkezi Konumu</h2>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              Bu yoğunlaşmayı elverişli çerçeve koşulları açıklıyor: siyasi istikrar, öngörülebilirlik, tarafsızlık, 
              mali cazibelik ve pragmatik düzenleyici ortam. İsviçre bankaları da emtia ticaret finansmanında 
              öncülük ederek belirleyici bir rol oynadı.
            </p>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              Ancak bugün, tahıl tüccarları iklim, ESG ve tedarik zinciri çerçevelerinin maliyetleri, lojistiği ve 
              pazar erişimini yeniden şekillendirdiği benzeri görülmemiş bir düzenleyici karmaşıklıkla karşı karşıya. 
              İki önemli örnek IMO Net-Sıfır Çerçevesi ve AB Ormansızlaşma Düzenlemesi (EUDR)’dir.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F1F20]">Deniz Taşımacılığının Net-Sıfır Yolu</h2>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              Bu makale yayınlandığında, Uluslararası Denizcilik Örgütü’nün 2050 yılına kadar net-sıfır sera gazı 
              emisyonu için bağlayıcı bir hedef belirleyen Net-Sıfır Çerçeve düzenlemesini kabul etmesi bekleniyor. 
              Bu, deniz taşımacılığında sera gazı fiyatlandırması ve enerji dönüşümü için teşviklerin getirilmesini 
              gerektiriyor.
            </p>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              “Sıfırdan sıfıra yakın” karbon yakıtlarının kullanımı için ödüller, ticari, teknik, çevresel ve siyasi 
              zorlukları beraberinde getiriyor. Yakıtların sağlam sertifikasyonu ve yaşam döngüsü değerlendirmesi, 
              arazi kullanım değişikliğine karşı önlemler ve gıda güvenliği üzerindeki istenmeyen sonuçlar 
              gerekli olacaktır. Deniz taşımacılığının karbonsuzlaştırılmasında biyoyakıtların rolü 
              tartışılmaya devam edecektir.
            </p>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              Tahıl ticareti için etki açıktır: daha yüksek navlun oranları fiyatlara yansıyarak akışları ve tedarik 
              zinciri rotalarını etkileyecektir. Düşük kar marjlı tüccarlar özellikle sert bir şekilde etkilenecek, 
              ithalatçı ülkeler ise gıda güvenliği konusunda daha güçlü garantiler talep ediyor.
            </p>
          </section>

          <section className="space-y-6">
            <blockquote className="border-l-4 border-[#C9A24B] bg-[#FBF8F1] text-[#1F1F1F] text-lg italic leading-relaxed px-6 py-4 rounded-2xl">
              “Kiralayıcıların temsilcileri olarak SUISSENÉGOCE, IMO’da düzenleyici kesinlik, öngörülebilirlik 
              ve yatırım yapılabilirliği savunuyor—deniz taşımacılığının enerji dönüşümüne özel yatırımı açmak 
              için gereken koşullar.”
            </blockquote>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F1F20]">EUDR: İzlenebilirliğin Bedeli</h2>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              EUDR, sadece ormansızlaşmadan arındırılmış ürünlerin (palmiye yağı ve soya dahil) AB pazarına 
              sunulmasını ve ticarileştirmeden önce coğrafi konum verilerinin sağlanmasını gerektiriyor—tarım 
              tüccarları için uyumlulukta köklü bir değişim. Bu, maliyetleri artıracak ve “düşük riskli” 
              ülkelerden tedariki teşvik ederek tedarik zincirlerini yeniden şekillendirecektir.
            </p>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              Daha zayıf uyum kapasitesine sahip üretici ülkeler, özellikle küçük ölçekli çiftçiler olmak üzere 
              sosyo-ekonomik etkilere maruz kalma riski taşıyor. Pazarlar dışlanma, daha yüksek tüketici fiyatları, 
              maliyetli yeniden yönlendirme ve daha fazla oynaklık görebilir.
            </p>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              EUDR ayrıca, sürdürülebilirlik kurallarını karlılıkla uyumlu hale getirmenin zorluğunu ortaya 
              koyuyor, özellikle emtia ticaretinde faaliyet gösteren KOBİ’ler için—çünkü eşikler AB cirosu 
              üzerinden belirleniyor. Pratikte, bazı İsviçreli KOBİ’ler üç ila dört uyum personeli istihdam 
              etti—toplam iş gücünün %15’ine kadar—karlılığa katkı sağlamayan ancak erişim için gerekli 
              bir maliyet.
            </p>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              EUDR’nin ikinci kez ertelenebileceği düşünüldüğünde, şirketlerin bu düzenlemeye uyum sağlamak 
              için öngörülebilirliğe ihtiyacı var—bu, izlenebilirlik ve şeffaflık yönünde belirleyici bir adım.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F1F20]">Tüccarların İhtiyaç Duyduğu Şeyler</h2>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              Merkezi soru şu olmaya devam ediyor: sürdürülebilirlik ve rekabetçilik nasıl dengelenir? 
              IMO Net-Sıfır Çerçevesi ve EUDR’nin her ikisi de öngörülebilirliğin ve düzenleyiciler ile 
              endüstri arasındaki açık diyalogun gerekli olduğunu gösteriyor.
            </p>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              Çerçeveler net, uluslararası olarak uyumlu ve adil bir şekilde uygulandığında, tüccarlar 
              iddialı sürdürülebilirlik hedeflerine karşı uyum sağlayabilir ve yatırım yapabilir. 
              Bu özellikle tahıl için hayati önem taşıyor—sadece başka bir emtia değil, küresel gıda 
              güvenliğinin temelidir.
            </p>
            <p className="text-lg leading-relaxed text-[#4F4F4F]">
              SUISSENÉGOCE, özel sektörle yakın ortaklık içinde geliştirilmiş pragmatik düzenleme çağrısında 
              bulunuyor, böylece kurallar uygulanabilir, pratik ve nihayetinde engel değil fırsat olarak 
              görülebilir.
            </p>
          </section>

          <section className="space-y-6 text-lg leading-relaxed text-[#4F4F4F]">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F1F20]">Sonuç</h2>
            <p>
              Sürdürülebilirlik ve karbonsuzlaştırma, emtia ticareti sektörü için kaçınılmaz dönüşümlerdir. 
              IMO Net-Sıfır Çerçevesi ve EUDR gibi düzenlemeler, sektörü yeniden şekillendirirken hem
              zorluklar hem de fırsatlar sunuyor.
            </p>
            <p>
              Tahıl ticareti söz konusu olduğunda, düzenleyici belirsizlik ve yüksek uyum maliyetleri 
              özellikle küçük ve orta ölçekli işletmeler için ciddi riskler oluşturuyor. Ancak net, 
              öngörülebilir ve uluslararası uyumlu çerçevelerle sektör bu dönüşümü başarıyla yönetebilir.
            </p>
            <p className="border-t-2 border-[#E0E0E0] pt-6 mt-8 text-sm text-[#828282]">
              * Bu makale, Miller Magazine’in Fastmarkets tarafından düzenlenen Global Grain Geneva 2025 
              ile medya ortaklığı kapsamında yayınlanmıştır.
            </p>
            <p className="text-sm text-[#828282]">
              * Gaël Coronel, emtia ticareti, nakliyesi ve finansmanını temsil eden İsviçre birliği 
              SUISSENÉGOCE’de Düzenleme ve Kamu İşlerinden sorumludur.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
