//=============================================================== vars ===============================================================
const fa_array = [
    'ضرب‌المثل‌ها چکیده تجربه نسل‌ها هستند. «کار نیکو کردن از پر کردن است»، یعنی تمرین و تکرار کلید مهارت است. «جوجه را آخر پاییز می‌شمارند» به ما می‌آموزد عجله نکنیم و نتیجه را در پایان کار بسنجیم. «آب که از سر گذشت، چه یک وجب چه صد وجب» گاهی طنز تلخی در خود دارد. این جملات کوتاه، درس‌های بزرگی به زبان ساده بیان می‌کنند و هنوز پس از قرن‌ها در گفتگوهای روزمره ما زنده‌اند.',

    'داشتن برنامه روزانه از سردرگمی جلوگیری می‌کند و بهره‌وری را بالا می‌برد. شب قبل، سه کار مهم فردا را یادداشت کنید و صبح با اولویت‌بندی شروع کنید. تکنیک پومودورو (۲۵ دقیقه کار و ۵ دقیقه استراحت) برای حفظ تمرکز فوق‌العاده است. فراموش نکنید که زمان‌هایی برای استراحت و تفریح هم در برنامه بگنجانید. زندگی متعادل، راز موفقیت پایدار است. هر روز یک قدم به اهدافتان نزدیک شوید، حتی اگر کوچک باشد.',

    'موسیقی سنتی ایران با دستگاه‌هایی چون شور، ماهور و همایون، روحی لطیف و عرفانی دارد. سازهای تار، سه‌تار، کمانچه و سنتور راوی قصه‌های عاشقانه و حماسی این سرزمین هستند. تصنیف‌های قدیمی با اشعار حافظ و سعدی، پیوندی عمیق میان شعر و موسیقی برقرار می‌کنند. امروز خوانندگانی چون شجریان و ناظری این میراث را به نسل جدید منتقل کرده‌اند. گوش دادن به یک قطعه سنتی، آرامشی وصف‌ناپذیر به قلب هدیه می‌دهد.',

    'زباله‌های پلاستیکی تهدیدی جدی برای محیط زیست هستند. هر بطری پلاستیکی که در طبیعت رها می‌شود، ممکن است تا صدها سال در خاک باقی بماند. با تفکیک زباله و بازیافت می‌توانیم از آلودگی بیشتر جلوگیری کنیم. خرید محصولات با بسته‌بندی کمتر، استفاده از کیسه‌های پارچه‌ای و مشارکت در پویش‌های پاکسازی، گام‌های کوچکی برای تغییر بزرگ هستند. زمین خانه مشترک ماست؛ برای حفظ آن هر اقدامی ارزشمند است.',

    'خوشنویسی ایرانی از ظریف‌ترین هنرهای تجسمی است که با خط نستعلیق به اوج زیبایی رسید. استادانی چون میرعماد و کلهر آثاری جاودانه خلق کرده‌اند که هنوز الهام‌بخش هنرمندان جوان است. در این هنر، هر منحنی و نقطه معنایی عمیق دارد و با صبر و تمرین فراوان می‌توان به مهارت رسید. امروزه با وجود رواج تایپ، خوشنویسی جایگاه خود را به‌عنوان میراث فرهنگی حفظ کرده است و حتی در طراحی پوستر و لوگو کاربرد دارد.',

    'ورزش اول صبح انرژی شگفت‌انگیزی به بدن می‌بخشد. یک پیاده‌روی تند یا چند حرکت کششی ساده می‌تواند گردش خون را بهبود بخشد و ذهن را برای روزی پربار آماده کند. تحقیقات نشان داده کسانی که صبح‌ها ورزش می‌کنند، تصمیم‌گیری‌های بهتری در طول روز دارند. لازم نیست قهرمان باشید؛ با ده دقیقه نرمش در خانه شروع کنید. به مرور، این کار به بخشی جدایی‌ناپذیر از برنامه روزانه‌تان تبدیل می‌شود.',

    'کتاب خواندن دریچه‌ای به دنیاهای ناشناخته است. مطالعه نه تنها دانش ما را افزایش می‌دهد، بلکه دایره واژگان و قدرت تفکر انتقادی را تقویت می‌کند. افراد کتابخوان معمولا همدلی بیشتری دارند و بهتر می‌توانند خود را جای دیگران بگذارند. برای ایجاد عادت مطالعه، روزانه حداقل بیست دقیقه کتاب بخوانید. از رمان‌های کلاسیک تا کتاب‌های علمی، انتخاب با شماست. هر کتاب یک ماجراجویی تازه است.',

    'شمال ایران با جنگل‌های سرسبز، دریای خزر و هوای دل‌پذیر، مقصدی رویایی برای گردشگران است. از رشت و انزلی گرفته تا رامسر و چالوس، هر گوشه‌اش طبیعتی بکر دارد. بهار که از راه می‌رسد، شکوفه‌های بهارنارنج فضا را عطرآگین می‌کند. در کنار ساحل می‌توانید از ماهی‌های تازه و غذاهای محلی مانند میرزاقاسمی لذت ببرید. اگر به دنبال آرامشید، یک آخر هفته در ماسال یا ماسوله اقامت کنید.',

    'تغذیه سالم نقشی اساسی در حفظ سلامت جسم و روان دارد. مصرف میوه‌ها، سبزیجات تازه، غلات کامل و پروتئین‌های کم‌چرب به تقویت سیستم ایمنی کمک می‌کند. از سوی دیگر، زیاده‌روی در خوردن قند، نمک و چربی‌های اشباع‌شده می‌تواند به بیماری‌های مزمن مانند دیابت و فشار خون منجر شود. نوشیدن آب کافی را فراموش نکنید؛ روزانه حداقل هشت لیوان آب بنوشید. یک سبک زندگی سالم با انتخاب‌های کوچک آغاز می‌شود.',

    'هوش مصنوعی هر روز بیش از پیش در زندگی ما نفوذ می‌کند. از دستیارهای صوتی گرفته تا خودروهای خودران، این فناوری شیوه کار و زندگی بشر را دگرگون کرده است. اما در کنار تمام مزایا، نگرانی‌هایی درباره حریم خصوصی و جایگزینی مشاغل انسانی وجود دارد. محققان تلاش می‌کنند با وضع قوانین مناسب، تعادل را حفظ کنند. آینده از آن کسانی است که بتوانند با ماشین‌های هوشمند همکاری کنند.'

]

const en_array = [
    "Chocolate's history dates back to ancient Mesoamerica. The Olmecs first consumed cacao as a bitter beverage. The Aztecs and Maya valued cacao beans so highly they used them as money. When it reached Europe, sugar was added and it became a luxury. Today, chocolate is loved globally in many forms.",

    "Bees are vital pollinators for our food supply. They help fruits, vegetables, and nuts grow. Sadly, their numbers are dropping due to pesticides and habitat loss. Planting wildflowers and avoiding chemicals in gardens can make a difference. Every small garden can become a sanctuary for bees. Protecting bees is crucial for our future.",

    "Before the printing press, books were copied by hand and very costly. Gutenberg's movable type changed everything in the 1440s. His press printed hundreds of pages daily. Ideas spread like wildfire, fueling the Renaissance. Literacy grew, and knowledge became a right, not a privilege. It remains a landmark invention.",

    "The Northern Lights, or Aurora Borealis, glow in shimmering curtains of green and pink. Solar particles collide with our atmosphere to create this display. Best seen near the Arctic Circle in places like Norway and Iceland. People travel from afar to witness the dancing lights. Ancient legends say they were spirits or reflections of fire.",

    "Journaling is a powerful tool for self-discovery. Putting thoughts on paper reduces stress and brings clarity. Even a few sentences daily can capture meaningful moments. There is no wrong way to write; it's entirely yours. Looking back, you will see your own growth. A journal is a gift to your future self.",

    "The Great Barrier Reef in Australia is the largest coral reef on Earth. It stretches over 2,300 kilometers and teems with marine life. Colorful fish, turtles, and sharks call it home. Sadly, warming oceans cause coral bleaching, threatening this ecosystem. Protecting the reef is a global priority. Its beauty is irreplaceable.",

    "The Japanese tea ceremony, known as chanoyu, is a ritual of grace and mindfulness. Preparing matcha involves precise, meditative movements. It embodies harmony, respect, purity, and tranquility. Guests savor both the tea and the peaceful setting. A ceremony can last for hours, yet feels timeless. It reflects the beauty of simplicity.",

    "Meditation helps quiet the mind and ease anxiety. By focusing on the breath, we find inner calm. Studies show it boosts concentration and emotional well-being. You can meditate anywhere, even for ten minutes a day. With practice, it reshapes the brain for positivity. It's a simple yet transformative habit.",

    "Coffee's story begins in Ethiopia, where its energizing berries were first discovered. It spread to Yemen and the Middle East, where coffeehouses flourished. By the 17th century, it reached Europe and sparked a café culture. Today, it's a global staple, from morning espresso to afternoon lattes. The journey from bean to cup is a rich one.",

    "Origami is the Japanese art of folding paper into beautiful shapes. No cutting or gluing is needed-just precise folds. The classic paper crane symbolizes peace and hope. From simple boats to complex dragons, the possibilities are endless. It also influences engineering and design. A single sheet can become a work of art."
]

const num_array = [
    // ۱. گروه‌های ۴ رقمی
    "4829 1735 6092 5184 2973 8401 3567 9248 1750 6329 4085 7613 5492 8371 2064 9853 1247 6905 3782 5146 8390 2674 1508 4937 7821 6098 3456 9270 1863 5409 8732 2145 6589 3902 4761 8024 1357 9648 5273 8196 3402 7850 1293 6584 9075 2436 8719 4601 5328 1974",

    // ۲. شماره تلفن با خط تیره
    "0912-345-6789 0935-123-4567 0918-987-6543 0921-456-7890 0990-112-2334 0913-556-7788 0936-890-1234 0914-321-6789 0922-789-0123 0915-432-5678 0937-654-0987 0916-210-9876 0991-345-6789 0938-876-5432 0917-908-1234 0923-567-8901 0919-234-5678 0992-876-5432 0910-123-9876 0939-432-1098",

    // ۳. سریال اعداد کوتاه ۲ و ۳ رقمی
    "12 345 67 89 01 234 56 78 90 123 45 678 90 12 345 67 890 123 456 78 90 123 456 789 01 234 56 789 012 345 678 90 123 45 67 890 12 345 678 901 234 567 890 12 345 67 890 123 45 678 90 123 456 78 901 234 56 789 012 345 678 901 234 567 890 12 345 678 90 12",

    // ۴. کد ملی، کد پستی و اعداد بانکی
    "0371-456-7890 1234-5678-9012 3456 6280-1234-5678-9012 1111-2222-3333-4444 5555-6666-7777-8888 9876-5432-1098-7654 4321-8765-2109 1357-9246-8024-6810 5060-7080-9030 1122-3344-5566-7788 9900-1234-5678-2345 3450-7890-1234-5678 9012-3456-7890 111-222-333 444-555-666",

    // ۵. اعداد تصادفی با فاصله
    "583 794 210 648 305 927 481 563 729 195 846 302 657 918 473 250 689 134 762 508 931 475 284 697 150 863 429 576 813 942 157 680 324 795 461 238 507 892 145 678 319 754 283 940 615 372 859 126 497 803 564 921 387 450 736 298 641 875 309 524 186",

    // ۶. ترکیب اعداد ۵ رقمی و ۴ رقمی
    "48291 73640 18523 94756 30284 65917 82463 57028 19384 62509 41837 27654 83092 56741 39820 74563 91288 35470 68921 40367 52819 17643 89250 63417 95782 21069 58347 76904 32581 49873 64215 81930 75628 30491 98735 12046 57392 86154 23907 69428 40573 98216 54780 31689 72145 85903 46027 13598",

    // ۷. شماره کارت بانکی (۱۶ رقمی با جداکننده)
    "6037-9911-2233-4455 5022-3344-5566-7788 6362-1411-1212-3434 6274-1212-3434-5656 5892-1010-2020-3030 6273-8011-2233-4455 5041-7210-1234-5678 6037-9876-5432-1098 6393-1111-2222-3333 5022-9090-8080-7070 6362-3456-7890-1234 6274-5678-9012-3456 5892-4321-8765-2109",

    // ۸. اعداد با الگوی صعودی و نزولی
    "123 456 789 101 112 131 415 161 718 192 021 222 324 252 627 282 930 313 233 343 536 373 839 404 142 434 445 464 748 495 051 525 354 555 657 585 960 616 263 646 566 676 869 707 172 737 475 767 778 798 081 828 384 858 687 888 990 919 293 949 596 979 899",

    // ۹. اعداد کوتاه ۳ رقمی پشت سر هم
    "849 205 731 468 392 157 680 423 975 218 563 807 142 695 328 471 914 256 589 832 174 617 950 283 726 169 402 845 378 519 634 987 210 453 796 128 561 804 347 682 915 238 570 813 146 489 722 355 698 931 264 507 840 173 616 959 292 535 878 210 553 896",

    // ۱۰. تاریخ‌ها و کدهای زمانی
    "1402/06/15 2024-09-03 08:45 12:30:59 1401/12/29 1999-12-31 23:59:59 1403/01/01 07:00 15:45:12 1400/07/22 2025-06-18 18:30 20:15:45 1399/11/10 2018-03-21 00:00:00 1404/03/05 2023-01-01 13:00 09:17:33 1398/08/08 2016-07-14 21:45 06:30:18 1405/10/20 2030-05-10 17:55 11:11:11"
]

const code_array = [
    // Python
    "from functools import reduce ; nums = [5, 2, 8, 1, 3] ; s = sorted( nums ) ; print( s ) ; even = list( filter ( lambda x: x % 2 == 0, nums )) ; prod = reduce( lambda a, b: a * b, even, 1 ) ; print( prod ) ; fib = lambda n: n if n < 2 else fib( n - 1 ) + fib( n - 2 ) ; print( [ fib( i ) for i in range( 10 ) ] )",

    // JavaScript
    "const arr = [5, 2, 8, 1, 3] ; arr.sort((a, b) => a - b) ; console.log(arr) ; const evens = arr.filter(x => x % 2 == 0) ; console.log(evens.reduce((a, b) => a * b, 1)) ; const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2) ; console.log(Array.from({length: 10}, (_, i) => fib(i)))",

    // Java
    "import java.util.* ; import java.util.stream.* ; public class Main { public static void main(String[] a) { int[] n = {5, 2, 8, 1, 3} ; Arrays.sort(n) ; System.out.println(Arrays.toString(n)) ; var e = IntStream.of(n).filter(x -> x % 2 == 0).toArray() ; System.out.println(Arrays.toString(e)) ; System.out.println(IntStream.of(e).reduce(1, (x, y) -> x * y)) ; } }",

    // C
    "int main() { int a[] = {5, 2, 8, 1, 3}, n = 5, i, j, t ; for(i = 0 ; i < n - 1 ; i++) { for(j = 0 ; j < n - i - 1 ; j++) { if(a[j] > a[j + 1]) { t = a[j] ; a[j] = a[j + 1] ; a[j + 1] = t ; } } } for(i = 0 ; i < n ; i++) printf(\"%d \", a[i]) ; printf(\"\\n\") ; int p = 1 ; for(i = 0 ; i < n ; i++) if(a[i] % 2 == 0) p *= a[i] ; printf(\"%d\\n\", p) ; int f = 1 ; for(i = 1 ; i <= 5 ; i++) f *= i ; printf(\"%d\\n\", f) ; return 0 ; }",

    // C++
    "int main() { vector<int> v {5, 2, 8, 1, 3} ; sort(v.begin(), v.end()) ; for(int x : v) cout << x << ' ' ; cout << endl ; auto ev = remove_if(v.begin(), v.end(), [](int x) { return x % 2 != 0 ; }) ; v.erase(ev, v.end()) ; int prod = accumulate(v.begin(), v.end(), 1, multiplies<int>()) ; cout << prod << endl ; auto fib = [](int n) { auto f = [&](auto&& s, int n) -> int { return n < 2 ? n : s(s, n - 1) + s(s, n - 2) ; } ; return f(f, n) ; } ; cout << fib(10) << endl ; return 0 ; }",

    // C#
    "using System ; using System.Linq ; class P { static void Main() { var n = new[] {5, 2, 8, 1, 3} ; Array.Sort(n) ; Console.WriteLine(string.Join(\",\", n)) ; var e = n.Where(x => x % 2 == 0) ; Console.WriteLine(string.Join(\",\", e)) ; Console.WriteLine(e.Aggregate(1, (a, b) => a * b)) ; Func<int, int> f = null ; f = x => x < 2 ? x : f(x - 1) + f(x - 2) ; Console.WriteLine(string.Join(\",\", Enumerable.Range(0, 10).Select(f))) ; } }",

    // Ruby
    "nums = [5, 2, 8, 1, 3] ; nums.sort! ; p nums ; evens = nums.select(&:even?) ; p evens ; p evens.reduce(1, :*) ; def fib(n) n < 2 ? n : fib(n - 1) + fib(n - 2) end ; p (0...10).map { |i| fib(i) }",

    // Go
    "package main ; import \"fmt\" ; func main() { arr := []int{5, 2, 8, 1, 3} ; for i := 0 ; i < len(arr)-1 ; i++ { for j := 0 ; j < len(arr)-i-1 ; j++ { if arr[j] > arr[j+1] { arr[j], arr[j+1] = arr[j+1], arr[j] } } } ; fmt.Println(arr) ; prod := 1 ; for _, v := range arr { if v % 2 == 0 { prod *= v } } ; fmt.Println(prod) ; var fib func(int) int ; fib = func(n int) int { if n < 2 { return n } ; return fib(n-1) + fib(n-2) } ; for i := 0 ; i < 10 ; i++ { fmt.Print(fib(i), \" \") } }",

    // Rust
    "fn main() { let mut v = vec![5, 2, 8, 1, 3] ; v.sort() ; println!(\"{:?}\", v) ; let ev: Vec<_> = v.iter().filter(|&&x| x % 2 == 0).collect() ; let prod: i32 = ev.iter().fold(1, |a, b| a * b) ; println!(\"{}\", prod) ; fn fib(n: u32) -> u32 { match n { 0|1 => n, _ => fib(n - 1) + fib(n - 2) } } ; let fibs: Vec<_> = (0..10).map(fib).collect() ; println!(\"{:?}\", fibs) ; }",

    // Swift
    "var a = [5, 2, 8, 1, 3] ; a.sort() ; print(a) ; let e = a.filter { $0 % 2 == 0 } ; print(e.reduce(1, *)) ; func fib(_ n: Int) -> Int { return n < 2 ? n : fib(n - 1) + fib(n - 2) } ; print((0..<10).map { fib($0) })"
]



const typingModeData = document.querySelectorAll('.typing_mode_data');
const menuDesignEL = document.querySelectorAll('.menu__design');
const modeData = document.querySelectorAll('.mode_data');
const aniSvg = document.querySelectorAll('.ani_svg');
const startBtnEL = document.querySelector('.input_btn');
const addSvg = document.querySelector('.add_svg');
const startMenu = document.querySelector('.start_menu');
const aboutMe = document.querySelector('.about_me');
const typeHistory = document.querySelector('.type_history');
const settings = document.querySelector('.settings');
const startType = document.querySelector('.start_type');
const colorSvg = document.querySelector('.color_svg');
const addText = document.querySelector('.add_text');
const testingBox = document.querySelector('.testing_box')
const themeColors = document.querySelector('.theme_colors');
const enFontChose = document.querySelector('.en_font_chose');
const body = document.querySelector('body');
const choserF = document.querySelector('.fa_choser');
const choserE = document.querySelector('.en_choser');
const faFontChose = document.querySelector('.fa_font_chose');
const addingEL = document.querySelector('.adding');
const addingIcon = document.querySelector('.adding_icon');
const addingIcon1 = document.querySelector('.adding_line1');
const addingIcon2 = document.querySelector('.adding_line2');
const textareaEL = document.querySelector('#add_text_area');
const personalThemeInput = document.querySelector('#personal_theme_input');
const testingBoxProtector = document.querySelector('.testing_box_protector');
const forTestSize = document.querySelector('.for_test_size');
const textMiniBox = document.querySelector('.text_mini_box');
const miniContainer = document.querySelector('.mini_container');
const testingContainer = document.querySelector('.testing_container');
const username = document.querySelector('#username');
const km = document.querySelector('.km');
const kmNumber = document.querySelector('.km_number');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const bluring = document.querySelector('.bluring');
const typingModeContainerFa = document.querySelector('.typing_mode_container_fa');
const typingModeContainerEn = document.querySelector('.typing_mode_container_en');
const typingModeContainerNum = document.querySelector('.typing_mode_container_num');
const typingModeContainerCode = document.querySelector('.typing_mode_container_code');
const enMode = document.querySelector('.en_mode');
const faMode = document.querySelector('.fa_mode');
const codeMode = document.querySelector('.code_mode');
const numMode = document.querySelector('.num_mode');
const dataContainerEn = document.querySelector('.data_container_en');
const dataContainerFa = document.querySelector('.data_container_fa');
const dataContainerNum = document.querySelector('.data_container_num');
const dataContainerCode = document.querySelector('.data_container_code');
const his = document.querySelector('.his');
const addTextArea = document.querySelector('#add_text_area');
const tahomaCheckbox = document.querySelector('#en_fontId1');
const robotoCheckbox = document.querySelector('#en_fontId2');
const monacoCheckbox = document.querySelector('#en_fontId3');
const menloCheckbox = document.querySelector('#en_fontId4');
const yekanCheckbox = document.querySelector('#fa_fontId1');
const royaCheckbox = document.querySelector('#fa_fontId2');
const tanhaCheckbox = document.querySelector('#fa_fontId3');
const koodakCheckbox = document.querySelector('#fa_fontId4');
const faScore = document.querySelector('#fa_score');
const faScoreTop = document.querySelector('#fa_score_top');
const enScore = document.querySelector('#en_score');
const enScoreTop = document.querySelector('#en_score_top');
const numScore = document.querySelector('#num_score');
const numScoreTop = document.querySelector('#num_score_top');
const codeScore = document.querySelector('#code_score');
const codeScoreTop = document.querySelector('#code_score_top');
const gitLink = document.querySelector('.git_link');
const warning = document.querySelector('.warning');
const bgImage = document.querySelector('.bg_image_1');




const backAndRestart = document.querySelector('.back_and_restart');
const escButton = document.querySelector('#esc_button_id');
const deleteButton = document.querySelector('#delete_button_id');
const escButtonLabel = document.querySelector('.esc_button');
const deleteButtonLabel = document.querySelector('.delete_button');

const localScores ={
    localLastFa: "000",
    localTopFa: "000",
    localLastEn: "000",
    localTopEn: "000",
    localLastnum: "000",
    localTopnum: "000",
    localLastcode: "000",
    localTopcode: "000",
}

let oldTheme = document.querySelector('#theme0');
let texttextclasses = '';
let texttext = '';
let textCode = '';
let textCodeforsize = '';
let isPersian;
let timer_key = null;
let km_key = null;
let time_real = 1;
let count_second = 0;
let count_minute = 0;
let trues = 0;
let km_value = 0;
let step = 0;
let inputI = '';
let falsein = false;
let start_time = true;
let mode = '';
let hisContent;
let windowWidth = window.innerWidth;
let blocked= true;
let controller = null;

//=============================================================== funcs ===============================================================

// username , theme and font from local
const localThemeFontUsername = () => {

    // theme
    const localThemeVar = JSON.parse(localStorage.getItem('localTheme'));
    if (localThemeVar) {

        let bgc = localThemeVar.bgc_local;

        if (localThemeVar.oldTheme_local_id === 'personal_theme_input') {
            colorSvg.style.fill = bgc;
            personalThemeInput.value = bgc;
        }
        document.documentElement.style.setProperty('--bgc', bgc);
        document.documentElement.style.setProperty('--bxsh-out', localThemeVar.bxsh_out_local);
        document.documentElement.style.setProperty('--bxsh-in', localThemeVar.bxsh_in_local);
        document.documentElement.style.setProperty('--fill', localThemeVar.fill_local);
        document.documentElement.style.setProperty('--bxsh-in-rev', localThemeVar.bxsh_in_rev_local);
        document.documentElement.style.setProperty('--bxsh-hov', localThemeVar.bxsh_hov_local);
        document.documentElement.style.setProperty('--cursor', localThemeVar.cursor_local);
        if (localThemeVar.oldTheme_local_id) {
            oldTheme.checked = false;
            oldTheme = document.querySelector(`#${localThemeVar.oldTheme_local_id}`);
            oldTheme.checked = true;
        }
        else personalThemeInput.value = bgc;
        console.log(localThemeVar);
    }

    // username
    const localUserName = JSON.parse(localStorage.getItem('localUserName'));
    if (localUserName) {
        username.value = localUserName;
    }
    
    // bgImage
    const localbgImage = JSON.parse(localStorage.getItem('localbgImage'));
    if (localbgImage) {
        bgImage.src = localbgImage;
    }

    //scores
    const storedScores = JSON.parse(localStorage.getItem('localScores'));
    if (storedScores) {
        Object.assign(localScores, storedScores); 
        faScore.innerHTML = localScores.localLastFa;
        faScoreTop.innerHTML = localScores.localTopFa;
        enScore.innerHTML = localScores.localLastEn;
        enScoreTop.innerHTML = localScores.localTopEn;
        numScore.innerHTML = localScores.localLastnum;
        numScoreTop.innerHTML = localScores.localTopnum;
        codeScore.innerHTML = localScores.localLastcode;
        codeScoreTop.innerHTML = localScores.localTopcode;
    }

    // font
    const localFont = JSON.parse(localStorage.getItem('localFont'));
    if (localFont) {
        const dir = localFont.dirLocal;
        const fonttt = localFont.fontLocal;

        textareaEL.style.direction = dir;
        textareaEL.style.setProperty('font-family', fonttt);
        document.documentElement.style.setProperty('--font', fonttt);


        if (dir === 'rtl') {
            choserF.style.setProperty('right', localFont.positionLocal);
            choserF.style.boxShadow = 'var(--bxsh-in-rev), var(--bxsh-out)';
            choserE.style.boxShadow = 'var(--bxsh-in), var(--bxsh-out)';
        }
        else if (dir === 'ltr') {
            choserE.style.setProperty('right', localFont.positionLocal);
            choserE.style.boxShadow = 'var(--bxsh-in-rev), var(--bxsh-out)';
            choserF.style.boxShadow = 'var(--bxsh-in), var(--bxsh-out)';
        }
        
        if (fonttt === "tahoma") tahomaCheckbox.checked = true;
        else if (fonttt === "roboto") robotoCheckbox.checked = true;
        else if (fonttt === "monaco") monacoCheckbox.checked = true;
        else if (fonttt === "menlo") menloCheckbox.checked = true;
        else if (fonttt === "yekan") yekanCheckbox.checked = true;
        else if (fonttt === "roya") royaCheckbox.checked = true;
        else if (fonttt === "tanha") tanhaCheckbox.checked = true;
        else if (fonttt === "koodak") koodakCheckbox.checked = true;

    }

    //history
    const localHistory = JSON.parse(localStorage.getItem('localHistory'));
}


// for saving username
const saveUserName = () => {
    let localUserName = username.value;
    localStorage.setItem('localUserName', JSON.stringify(localUserName));
}


// for removing in future
const mini_focus = () => textMiniBox.focus();

// for removing in future
const text_focus = () => addTextArea.focus();


// km and speed set
const km_update = () => {
    if (km_key) return;
    km_key = setInterval(() => {
        km_value = ~~(trues * 12 / time_real);
        kmNumber.innerHTML = km_value;
        km.style.transform = `rotate(${km_value}deg)`;
    }, 200)
};


// start type timer
const start = () => {
    if (timer_key) return;
    timer_key = setInterval(() => {
        time_real++;
        count_second++;
        if (count_second === 60) {
            count_second = 0;
            count_minute++;
            count_minute < 10 ? minute.innerHTML = `0${count_minute}` : minute.innerHTML = count_minute;
        }
        count_second < 10 ? second.innerHTML = `0${count_second}` : second.innerHTML = count_second;
    }, 1000)
};


// % of persian char
const persiandarsad = text => {
    if (!text) return 0;
    const persian = text.match(/[\u0600-\u06FF\uFB50-\uFDFF\uFE70-\uFEFF]/g) || [];
    return (persian.length / text.length) * 100;
}


// for font choser event listener
const fontChoseer = (event, dir, lan, anotherlan) => {
    textareaEL.style.direction = dir;
    const choser = event.target;
    const chosenFont = choser.getAttribute('font');
    const positionFont = choser.getAttribute('position');

    textareaEL.style.setProperty('font-family', chosenFont);
    document.documentElement.style.setProperty('--font', chosenFont);
    lan.style.setProperty('right', positionFont);
    lan.style.boxShadow = 'var(--bxsh-in-rev), var(--bxsh-out)';
    anotherlan.style.boxShadow = 'var(--bxsh-in), var(--bxsh-out)';

    const localFont = {
        fontLocal: chosenFont,
        dirLocal: dir,
        positionLocal: positionFont,
    }

    localStorage.setItem('localFont', JSON.stringify(localFont));

}


// color pallet
const pallet = event => {
    let palletColor = event.target.value;
    document.documentElement.style.setProperty('--bgc', palletColor);
    colorSvg.style.fill = palletColor;
}


const forPalletChange = event => {
    const palletColor = event.target.value;
    const localTheme = JSON.parse(localStorage.getItem('localTheme')) || {};
    

    localTheme.bgc_local = palletColor;
    localTheme.oldTheme_local_id = 'personal_theme_input';

    localStorage.setItem('localTheme', JSON.stringify(localTheme));
};

// realtime testing size changing
const testingSizeChange = () => testingBox.style.height = forTestSize.offsetHeight + 'px';


// realtime testing size changing
const modeSizeChangeEn = () => enMode.style.height = forTestSize.offsetHeight + 'px';
const modeSizeChangeFa = () => faMode.style.height = forTestSize.offsetHeight + 'px';
const modeSizeChangeNum = () => numMode.style.height = forTestSize.offsetHeight + 'px';
const modeSizeChangeCode = () => codeMode.style.height = forTestSize.offsetHeight + 'px';


// for closing from typing
const closeTyping = key => {
    const keyCode = key.code;
    if (keyCode === 'Escape') {
        escButtonClick();
    }
}


// for checking validate
const testingMotor = event => {

    // for stoping to copy paste
    if (!event.data || event.data.length === 1) {

        inputI = textMiniBox.value;

        // starting timer and speed
        start_time && (start(), km_update(), start_time = false);

        if (event.data === ' ') {
            texttextclasses[step].classList.remove('outline_style');

            try { texttextclasses[step + 1].classList.add('outline_style'); }
            catch {
                // step--;
                // textMiniBox.removeEventListener('blur', mini_focus);
                // textMiniBox.blur();
                km_value = ~~(trues * 12 / time_real);
                kmNumber.innerHTML = km_value;
                km.style.transform = `rotate(${km_value}deg)`;
                textMiniBox.readOnly = true;
                clearInterval(timer_key);
                clearInterval(km_key);
                timer_key = null;
                km_key = null;
                time_real = 1;
                count_second = 0;
                count_minute = 0;

                if(km_value< 10) km_value= "00" + km_value;
                else if(km_value< 100) km_value= "0" + km_value;

                if (mode === "fa") {
                    faScore.innerHTML= km_value;
                    localScores.localLastFa= km_value;
                    console.log("last fa"+localScores.localLastFa);
                    if (km_value > parseInt(faScoreTop.innerHTML)){
                        faScoreTop.innerHTML= km_value;
                        localScores.localTopFa= km_value;
                        console.log("top fa"+localScores.localTopFa);
                    }
                    localStorage.setItem('localScores', JSON.stringify(localScores));
                    
                }
                else if (mode === "en") {
                    enScore.innerHTML= km_value;
                    localScores.localLastEn= km_value;
                    if (km_value > parseInt(enScoreTop.innerHTML)){
                        enScoreTop.innerHTML= km_value;
                        localScores.localTopEn= km_value;
                    }
                    localStorage.setItem('localScores', JSON.stringify(localScores));
                }
                else if (mode === "num") {
                    numScore.innerHTML= km_value;
                    localScores.localLastnum= km_value;
                    if (km_value > parseInt(numScoreTop.innerHTML)){
                        numScoreTop.innerHTML= km_value;
                        localScores.localTopnum= km_value;
                    }
                    localStorage.setItem('localScores', JSON.stringify(localScores));
                }
                else if (mode === "code") {
                    codeScore.innerHTML= km_value;
                    localScores.localLastcode= km_value;
                    if (km_value > parseInt(codeScoreTop.innerHTML)){
                        codeScoreTop.innerHTML= km_value;
                        localScores.localTopcode= km_value;
                    }
                    localStorage.setItem('localScores', JSON.stringify(localScores));
                }
            }

            if (texttextclasses[step].innerHTML === inputI) {
                texttextclasses[step].classList.add('true');
                trues += textMiniBox.value.length + 1;
                textMiniBox.value = '';
                step++;
            }
            else {
                texttextclasses[step].classList.add('false');
                textMiniBox.value = '';
                step++;
                textMiniBox.classList.remove('wrong');
            }
        }

        else {
            for (let i = 0; i < inputI.length; i++) {
                if (inputI[i] !== texttextclasses[step].innerText[i]) {
                    falsein = true;
                    break;
                }
                else if (falsein === true && inputI[i] === texttextclasses[step].innerText[i]) {
                    falsein = false;
                }
            }
            if (inputI === '') falsein = false;
            if (falsein === true) textMiniBox.classList.add('wrong');
            else textMiniBox.classList.remove('wrong');
        }
    }
    else textMiniBox.value = '';
}


// rewrite adding text to spans
const rewrite = (value) => {

    //clear space, \n ,ets.
    texttext = value.replaceAll('\n', ' ').replaceAll('‌', ' ').split(" ").map(event => event.trim());
    for (let i = 0; i < texttext.length; i++) {
        const words = texttext[i];
        if (words !== "") {
            textCode += `<span class="letter">${words} </span>`;
            textCodeforsize += `<span class="letter_size">${words} </span>`;
        }
    }
    forTestSize.innerHTML = textCodeforsize;

    //empty textarea
    textareaEL.value = " ";
    testingBox.innerHTML = textCode;
    textareaEL.classList.add('opacity0');
    addSvg.classList.add('opacity0');
    texttextclasses = document.querySelectorAll('.letter');
}


// animations for transform to type mode
const aniToTypeMode = () => {
    settings.classList.add('opacity0');
    settings.classList.remove('starter');
    gitLink.classList.remove('starter');
    typeHistory.classList.remove('starter');
    aboutMe.classList.remove('starter');
    bluring.classList.add('transparent');
    startType.classList.add('opacity0');
    miniContainer.classList.add('opacity1');
    addingEL.classList.add('adding_wrong_true_scale');
    addingIcon.classList.add('adding_icon_wrong_true_scale');
    addingIcon2.style.transform = 'translate(1px , -1px)';
    addingIcon1.classList.add('adding_button_transform');
    startMenu.classList.add('opacity0');
    testingBox.style.backgroundColor = 'var(--bgc)';
}


// (animations for transform to type mode)^reverse
const aniToTypeModeReverse = () => {
    settings.classList.remove('opacity0');
    settings.classList.add('starter');
    gitLink.classList.add('starter');
    typeHistory.classList.add('starter');
    aboutMe.classList.add('starter');
    bluring.classList.remove('transparent');
    startType.classList.remove('opacity0');
    miniContainer.classList.remove('opacity1');
    addingEL.classList.remove('adding_wrong_true_scale');
    addingIcon.classList.remove('adding_icon_wrong_true_scale');
    addingIcon2.style.transform = 'translate(-50%)';
    addingIcon1.classList.remove('adding_button_transform');
    startMenu.classList.remove('opacity0');
    testingBox.style.backgroundColor = 'transparent';
}


// for restart button
const escButtonClick = () => {

    textMiniBox.readOnly = false;

    textMiniBox.value = '';
    textMiniBox.classList.remove('wrong');


    // for keydown addlistener
    escButton.checked = false;

    // give outline
    try { texttextclasses[step].classList.remove('outline_style') }
    catch {
        null
    }

    // reset classes
    for (let i = step - 1; i >= 0; i--) {
        texttextclasses[i].classList.remove('false', 'true');
    }

    // initial vars in adding
    initialVars();

    texttextclasses[step].classList.add('outline_style');

    // click effect
    setTimeout(() => {
        escButton.checked = true;
    }, 150);
}


//initial vars
const initialVars = () => {

    // for able to start again timer and speed
    start_time = true;

    step = 0;
    clearInterval(timer_key);
    clearInterval(km_key);
    timer_key = null;
    km_key = null;
    time_real = 1;
    count_second = 0;
    count_minute = 0;
    second.innerHTML = '00';
    minute.innerHTML = '00';
    km_value = 0;
    kmNumber.innerHTML = km_value;
    km.style.transform = `rotate(${km_value}deg)`;
    trues = 0;
}

// closing button
const closing = () => {

    document.removeEventListener('keydown', key => closeTyping(key));
    backAndRestart.classList.add('opacity0');

    textMiniBox.removeEventListener('blur', mini_focus);
    textMiniBox.blur();
    textMiniBox.value="";
    if(textMiniBox.classList.contains('wrong')) textMiniBox.classList.remove("wrong");

    backAndRestart.style.visibility = 'hidden';
    textMiniBox.classList.remove('textMiniBox_transitionDuration');

    if (mode === 'adding') {
        window.removeEventListener('resize', testingSizeChange);
    }
    else if (mode === 'en') {
        window.removeEventListener('resize', modeSizeChangeEn);
    }
    else if (mode === 'fa') {
        window.removeEventListener('resize', modeSizeChangeFa);
        textMiniBox.classList.remove('rtl_dir');
    }
    else if (mode === 'num') {
        window.removeEventListener('resize', modeSizeChangeNum);
    }
    else if (mode === 'code') {
        window.removeEventListener('resize', modeSizeChangeCode);
    }

    forTestSize.innerHTML = '';

    setTimeout(() => {

        if (mode === 'adding') {
            testingContainer.classList.remove('testing_conteiner_size');
            addingEL.classList.remove('opacity0_pointernone');
            testingBox.style.height = '100%';
        }

        if (mode === 'en') {
            enMode.style.height = '100%';
            typingModeContainerEn.classList.remove('typing_mode_transition');
        }
        else if (mode === 'fa') {
            faMode.style.height = '100%';
            typingModeContainerFa.classList.remove('typing_mode_transition');
        }
        else if (mode === 'num') {
            numMode.style.height = '100%';
            typingModeContainerNum.classList.remove('typing_mode_transition');
        }
        else if (mode === 'code') {
            codeMode.style.height = '100%';
            typingModeContainerCode.classList.remove('typing_mode_transition');
        }

        setTimeout(() => {
            backAndRestart.style.visibility = 'hidden';
            backAndRestart.classList.remove('opacity0');
            aniToTypeModeReverse();
            textMiniBox.removeEventListener('input', testingMotor);
            if (mode === 'adding') {
                testingBox.innerHTML = '';
                testingBox.classList.remove('rtl_dir');
                textareaEL.classList.remove('opacity0');
                addSvg.classList.remove('opacity0');
                testingBox.style.boxShadow = '';
                addText.style.boxShadow = null;
                textareaEL.value = '';
            }
            else if (mode === 'en' || mode === 'fa' || mode === 'num' || mode === 'code') {
                addText.classList.add('starter');
                modeData.forEach(event => event.classList.remove('opacity0'));
                typingModeContainerEn.classList.remove('opacity0');
                typingModeContainerFa.classList.remove('opacity0');
                typingModeContainerCode.classList.remove('opacity0');
                typingModeContainerNum.classList.remove('opacity0');
                typingModeData.forEach(event => event.style.boxShadow = null);
                dataContainerEn.innerHTML = '';
                dataContainerFa.innerHTML = '';
                dataContainerNum.innerHTML = '';
                dataContainerCode.innerHTML = '';
            }


            initialVars();
            textCode = '';
            textCodeforsize = '';
            aniSvg.forEach(event => event.classList.remove('opacity0'));

            testingBoxProtector.style.zIndex = 'initial';
            
        }, 500);
    }, 200);
}


// start to go to type adding text
const goAddingType = () => {
    
    textareaEL.addEventListener('blur', text_focus);

    document.addEventListener('mousedown', event => {
    if(event.target.id == "") textareaEL.removeEventListener('blur' , text_focus);
})
    textareaEL.focus();
    const textvalue = textareaEL.value;
    const inputlen = textvalue.length;
    
    // test string len
    if (200 <= inputlen && inputlen <= 1000) {
        
        mode = 'adding';
        testingBox.style.boxShadow = 'var(--bxsh-in), var(--bxsh-out)';
        addText.style.boxShadow = 'none';
        rewrite(textvalue);
        
        textareaEL.removeEventListener('blur', text_focus);
        
        //change direction
        if (persiandarsad(textvalue) > 50) { testingBox.classList.add('rtl_dir'); isPersian = true; }
        
        // animations for transform to type mode
        aniToTypeMode();
        
        setTimeout(() => {

            addingEL.classList.add('opacity0_pointernone');

            setTimeout(() => {

                testingContainer.classList.add('testing_conteiner_size');
                testingBoxProtector.style.zIndex = '100';

                // initial sizing for testing  
                testingSizeChange();

                // realtime testing size changing
                window.addEventListener('resize', testingSizeChange);

                // all time focus on textMiniBox and show back-restart buttons
                setTimeout(() => {
                    textMiniBox.readOnly = false;

                    mini_focus(); textMiniBox.addEventListener('blur', mini_focus);
                    textMiniBox.classList.add('textMiniBox_transitionDuration');
                    backAndRestart.style.visibility = 'initial';

                    escButton.checked = true;
                    deleteButton.checked = true;
                    escButton.addEventListener('click', escButtonClick);
                    deleteButton.addEventListener('click', closing)

                }, 1000);

                texttextclasses[step].classList.add('outline_style');

                document.addEventListener('keydown', key => closeTyping(key))

                textMiniBox.addEventListener('input', testingMotor);
            }, 100);
        }, 100);
    }

    else {
        addingEL.classList.add('adding_wrong_true_scale');
        addingIcon.classList.add('adding_icon_wrong_true_scale');
        setTimeout(() => {
            addingEL.classList.remove('adding_wrong_true_scale');
            addingIcon.classList.remove('adding_icon_wrong_true_scale');
        }, 1000);
    }
}


const innerHTMLwriting = () => {
    //clear space, \n ,ets.
    for (let i = 0; i < texttext.length; i++) {
        const words = texttext[i];
        if (words !== "") {
            textCode += `<span class="letter">${words} </span>`;
            textCodeforsize += `<span class="letter_size">${words} </span>`;
        }
    }
    forTestSize.innerHTML = textCodeforsize;
}


const goToTypeMode = (one, two, three, mod) => {

    mode = mod;

    settings.classList.add('opacity0');
    aniSvg.forEach(event => event.classList.add('opacity0'));
    settings.classList.remove('starter');
    gitLink.classList.remove('starter');
    typeHistory.classList.remove('starter');
    aboutMe.classList.remove('starter');
    addText.classList.remove('starter');
    bluring.classList.add('transparent');
    modeData.forEach(event => event.classList.add('opacity0'));
    miniContainer.classList.add('opacity1');
    startMenu.classList.add('opacity0');
    one.classList.add('opacity0');
    two.classList.add('opacity0');
    three.classList.add('opacity0');
    typingModeData.forEach(event => event.style.boxShadow = 'var(--bxsh-in)');


    setTimeout(() => {

        if (mode === 'en') {
            typingModeContainerEn.classList.add('typing_mode_transition');
        }
        else if (mode === 'fa') {
            typingModeContainerFa.classList.add('typing_mode_transition');
        }
        else if (mode === 'num') {
            typingModeContainerNum.classList.add('typing_mode_transition');
        }
        else if (mode === 'code') {
            typingModeContainerCode.classList.add('typing_mode_transition');
        }


        testingBoxProtector.style.zIndex = '100';



        if (mode === 'en') {

            texttext = en_array[Math.floor(Math.random() * en_array.length)].replaceAll('\n', ' ').replaceAll('‌', ' ').split(" ").map(event => event.trim());

            innerHTMLwriting();

            // initial sizing for testing  
            modeSizeChangeEn();

            // realtime testing size changing
            window.addEventListener('resize', modeSizeChangeEn);

            dataContainerEn.innerHTML += textCode;
        }
        else if (mode === 'fa') {

            texttext = fa_array[Math.floor(Math.random() * fa_array.length)].replaceAll('\n', ' ').replaceAll('‌', ' ').split(" ").map(event => event.trim());

            innerHTMLwriting();

            // initial sizing for testing  
            modeSizeChangeFa();

            // realtime testing size changing
            window.addEventListener('resize', modeSizeChangeFa);

            textMiniBox.classList.add('rtl_dir');

            dataContainerFa.innerHTML += textCode;
        }
        else if (mode === 'num') {

            texttext = num_array[Math.floor(Math.random() * num_array.length)].replaceAll('\n', ' ').replaceAll('‌', ' ').split(" ").map(event => event.trim());

            innerHTMLwriting();

            // initial sizing for testing  
            modeSizeChangeNum();

            // realtime testing size changing
            window.addEventListener('resize', modeSizeChangeNum);

            dataContainerNum.innerHTML += textCode;
        }
        else if (mode === 'code') {

            texttext = code_array[Math.floor(Math.random() * code_array.length)].replaceAll('\n', ' ').replaceAll('‌', ' ').split(" ").map(event => event.trim());

            innerHTMLwriting();

            // initial sizing for testing  
            modeSizeChangeCode();

            // realtime testing size changing
            window.addEventListener('resize', modeSizeChangeCode);

            dataContainerCode.innerHTML += textCode;
        }


        texttextclasses = document.querySelectorAll('.letter');


        // all time focus on textMiniBox and show back-restart buttons
        setTimeout(() => {
            textMiniBox.readOnly = false;
            mini_focus(); textMiniBox.addEventListener('blur', mini_focus);
            textMiniBox.classList.add('textMiniBox_transitionDuration');
            backAndRestart.style.visibility = 'initial';

            escButton.checked = true;
            deleteButton.checked = true;
            escButton.addEventListener('click', escButtonClick);
            deleteButton.addEventListener('click', closing)

        }, 500);

        texttextclasses[step].classList.add('outline_style');

        document.addEventListener('keydown', key => closeTyping(key))

        textMiniBox.addEventListener('input', testingMotor);

    }, 250);
}

const setTheme = (event) => {

    const choseTheme = event.target.closest('.theme_checkbox');

    if (choseTheme && choseTheme !== oldTheme) {
        let bgc = choseTheme.value;
        let bxsh_out = choseTheme.getAttribute('bxsh-out');
        let bxsh_in = choseTheme.getAttribute('bxsh-in');
        let fill = choseTheme.getAttribute('color');
        let bxsh_in_rev = choseTheme.getAttribute('bxsh-in-rev');
        let bxsh_hov = choseTheme.getAttribute('bxsh-hov');
        let cursor = choseTheme.getAttribute('cursor');
        document.documentElement.style.setProperty('--bgc', bgc);
        document.documentElement.style.setProperty('--bxsh-out', bxsh_out);
        document.documentElement.style.setProperty('--bxsh-in', bxsh_in);
        document.documentElement.style.setProperty('--fill', fill);
        document.documentElement.style.setProperty('--bxsh-in-rev', bxsh_in_rev);
        document.documentElement.style.setProperty('--bxsh-hov', bxsh_hov);
        document.documentElement.style.setProperty('--cursor', cursor);
        console.log(oldTheme);
        oldTheme.checked = false;
        oldTheme = choseTheme;

        const localTheme = {
            bgc_local: bgc,
            bxsh_out_local: bxsh_out,
            bxsh_in_local: bxsh_in,
            fill_local: fill,
            bxsh_in_rev_local: bxsh_in_rev,
            bxsh_hov_local: bxsh_hov,
            cursor_local: cursor,
            oldTheme_local_id: choseTheme.getAttribute('id')
        }
        // console.log(choseTheme);
        localStorage.setItem('localTheme', JSON.stringify(localTheme));
    }
}

const warningMassage = (event) => {
    if(event.target.classList.contains("block") && blocked) {
        setTimeout(() => {
            warning.style.setProperty("transform", "translateX(-50%) scale(0.6)");
            warning.style.setProperty("opacity", "0.3");
        }, 5000);
        warning.style.setProperty("transform", "translate(-50% , 95px) scale(1)");
        warning.style.setProperty("opacity", "1");
    }
}

const goGitHub = () => {
    startBtnEL.checked= false;
    window.location.href = 'https://github.com/Behzadqasemzadeh';
}

const resizeWarning = () => {
  windowWidth = window.innerWidth;
  blocking();
}

const changeImage = () => {
  if(bgImage.src.includes('image1')){
    bgImage.src = "style/image2.jpeg";
    localbgImage = "style/image2.jpeg"    
  }
  else if(bgImage.src.includes('image2')){
    bgImage.src = "style/image1.jpeg";
    localbgImage = "style/image1.jpeg"
  }
  localStorage.setItem('localbgImage', JSON.stringify(localbgImage));
}

//for block and unblock
const blocking = () => {
  const shouldEnable = windowWidth > 1000;

  if (shouldEnable && !controller) {
    controller = new AbortController();
    const { signal } = controller;
    blocked= false;
    addingEL.addEventListener('click', goAddingType, { signal });
    typingModeContainerEn  .addEventListener('click', () => goToTypeMode(typingModeContainerCode, typingModeContainerFa, typingModeContainerNum, 'en'),   { signal });
    typingModeContainerFa  .addEventListener('click', () => goToTypeMode(typingModeContainerCode, typingModeContainerEn, typingModeContainerNum, 'fa'),   { signal });
    typingModeContainerCode.addEventListener('click', () => goToTypeMode(typingModeContainerEn, typingModeContainerFa, typingModeContainerNum, 'code'), { signal });
    typingModeContainerNum .addEventListener('click', () => goToTypeMode(typingModeContainerCode, typingModeContainerFa, typingModeContainerEn, 'num'),  { signal });
  } else if (!shouldEnable && controller) {
    controller.abort();
    controller = null;
    blocked= true;
  }
};

blocking();


//========================================================= event listeners ===============================================================

// for disable right click
// document.addEventListener('contextmenu', event => event.preventDefault())

window.addEventListener('resize', resizeWarning);

// change theme
themeColors.addEventListener('click', event => setTheme(event));

document.addEventListener('click', event => warningMassage(event));

username.addEventListener('change', saveUserName);

gitLink.addEventListener('click', goGitHub);

bluring.addEventListener('click', changeImage);


// personal theme pallet
personalThemeInput.addEventListener('input', event => pallet(event));
personalThemeInput.addEventListener('change', event => forPalletChange(event));


// fa change font
faFontChose.addEventListener('change', (event) => fontChoseer(event, 'rtl', choserF, choserE));


// en change font
enFontChose.addEventListener('change', (event) => fontChoseer(event, 'ltr', choserE, choserF));


//============================================================= cods ===================================================================

localThemeFontUsername();