(function(){
  var PRODUCTS = [{"id": "01", "slug": "lafore", "brand": "ЛАФОРЭ", "vol": "200 мл", "price": 3490, "desc": "Молочко с молочными протеинами растворяет макияж и городскую пыль за одно движение. Без липкости и плёнки."}, {"id": "02", "slug": "sovera", "brand": "СОВЭРА", "vol": "250 мл", "price": 2890, "desc": "Лёгкая текстура на минеральной воде. Снимает макияж и оставляет кожу мягкой."}, {"id": "03", "slug": "amalira", "brand": "АМАЛИРА", "vol": "200 мл", "price": 4280, "desc": "Плотное молочко для вечернего очищения. Работает со стойким макияжем и не стягивает кожу."}, {"id": "04", "slug": "clervel", "brand": "КЛЕРВЭЛЬ", "vol": "150 мл", "price": 3940, "desc": "Формула без отдушки для чувствительной кожи. Убирает макияж и не нарушает защитный барьер."}, {"id": "05", "slug": "belanua", "brand": "БЕЛАНУА", "vol": "200 мл", "price": 5190, "desc": "Бархатистое молочко с маслом камелии. Кожа после него мягкая, без блеска."}, {"id": "06", "slug": "taviera", "brand": "ТАВЬЕРА", "vol": "300 мл", "price": 2590, "desc": "Большой объём для ежедневного ритуала. Снимает макияж за одно движение, без липкости."}, {"id": "07", "slug": "ofirel", "brand": "ОФИРЭЛЬ", "vol": "200 мл", "price": 3750, "desc": "Молочко с экстрактом овса. Успокаивает кожу после города и снимает макияж."}, {"id": "08", "slug": "sandera", "brand": "САНДЭРА", "vol": "250 мл", "price": 4640, "desc": "Шелковистая текстура, которая тает на коже. Подходит для снятия макияжа с глаз."}, {"id": "09", "slug": "bianera", "brand": "БЬЯНЭРА", "vol": "150 мл", "price": 6450, "desc": "Концентрированное молочко: несколько капель на всё лицо. Экономичный ритуал на каждый вечер."}, {"id": "10", "slug": "levonie", "brand": "ЛЕВОНЬЕ", "vol": "200 мл", "price": 3280, "desc": "Мягкое очищение утром и вечером. Не оставляет плёнки и не требует тоника."}, {"id": "11", "slug": "veltana", "brand": "ВЕЛЬТАНА", "vol": "250 мл", "price": 2980, "desc": "Молочко с рисовым крахмалом. Матирует и снимает макияж, кожа остаётся спокойной."}, {"id": "12", "slug": "elania", "brand": "ЭЛАНИЯ", "vol": "200 мл", "price": 3690, "desc": "Прозрачная текстура без масел. Смывает макияж и не забивает поры."}, {"id": "13", "slug": "lusine", "brand": "ЛУСИНЭ", "vol": "150 мл", "price": 4120, "desc": "Компактный формат для поездок. Снимает макияж и увлажняет в один шаг."}, {"id": "14", "slug": "miradora", "brand": "МИРАДОРА", "vol": "200 мл", "price": 5490, "desc": "Молочко с жемчужным протеином. Кожа выглядит отдохнувшей даже после долгого дня."}, {"id": "15", "slug": "vionel", "brand": "ВИОНЭЛЬ", "vol": "250 мл", "price": 2760, "desc": "Лёгкое молочко для утреннего очищения. Освежает и готовит кожу к уходу."}, {"id": "16", "slug": "alevanta", "brand": "АЛЕВАНТА", "vol": "200 мл", "price": 3980, "desc": "Молочко с миндальным маслом. Снимает макияж и оставляет лёгкий уход."}];
  var KEY = 'blanmon_cart_v1';
  function money(v){ return String(v).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0') + '\u00A0\u20BD'; }
  function read(){ try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch(e){ return {}; } }
  function write(c){ try { localStorage.setItem(KEY, JSON.stringify(c)); } catch(e){} }
  function count(c){ var n=0, k; for(k in c){ n += c[k]; } return n; }
  function add(id, q){ var c=read(); c[id]=(c[id]||0)+(q||1); write(c); paintCount(); }
  function setQty(id,q){ var c=read(); if(q<=0){ delete c[id]; } else { c[id]=q; } write(c); paintCount(); }
  function paintCount(){ var el=document.querySelectorAll('[data-cart-count]'); var n=count(read());
    for(var i=0;i<el.length;i++){ el[i].textContent=n; } }
  function byId(id){ for(var i=0;i<PRODUCTS.length;i++){ if(PRODUCTS[i].id===id) return PRODUCTS[i]; } return null; }
  window.BLANMON = { PRODUCTS:PRODUCTS, money:money, read:read, write:write, count:count, add:add, setQty:setQty, byId:byId, paintCount:paintCount };
  document.addEventListener('DOMContentLoaded', function(){
    paintCount();
    var btns = document.querySelectorAll('[data-add]');
    for(var i=0;i<btns.length;i++){
      btns[i].addEventListener('click', function(e){
        e.preventDefault();
        var id = this.getAttribute('data-add');
        add(id,1);
        var old = this.textContent; this.textContent = 'Добавлено';
        var self=this; setTimeout(function(){ self.textContent = old; }, 1200);
      });
    }
  });
})();
