import { Member, Article, FAQ, Strings, GalleryItem } from '../../types';

export const members: Member[] = [
  { id: 1, name: 'Lala', role: { id: 'Vokalis', en: 'Vocalist', ja: 'ボーカリスト', ko: '보컬리스트' }, imageUrl: '/img/lala.jpg', socials: { tiktok: 'https://www.tiktok.com/@wwintolaa' } },
  { id: 2, name: 'Shalvatore', role: { id: 'Vokalis', en: 'Vocalist', ja: 'ボーカリスト', ko: '보컬리스트' }, imageUrl: '/img/shalvatore.jpg', socials: { tiktok: 'https://www.tiktok.com/@shalvatore_2' } },
  { id: 3, name: 'Syafa', role: { id: 'Vokalis', en: 'Vocalist', ja: 'ボーカリスト', ko: '보컬리스트' }, imageUrl: '/img/syafa.jpg', socials: { tiktok: 'https://www.tiktok.com/@_thisiswintrasyaaff' } },
  { id: 4, name: 'Devan', role: { id: 'Rapper', en: 'Rapper', ja: 'ラッパー', ko: '래퍼' }, imageUrl: '/img/devan.jpg', socials: { tiktok: 'https://www.tiktok.com/devlichious' } },
  { id: 5, name: 'Lysander Lee', role: { id: 'Vokalis', en: 'Vocalist', ja: 'ボーカリスト', ko: '보컬리스트' }, imageUrl: '/img/lysander.jpg', socials: { tiktok: 'https://www.tiktok.com/@lysanderlee' } },
  { id: 6, name: 'Dafarrel', role: { id: 'Vokalis', en: 'Vocalist', ja: 'ボーカリスト', ko: '보컬리스트' }, imageUrl: '/img/daffarel.jpg', socials: { tiktok: 'https://www.tiktok.com/@dfarrelruii_' } },
  { id: 7, name: 'Ella', role: { id: 'Vokalis', en: 'Vocalist', ja: 'ボーカリスト', ko: '보컬리스트' }, imageUrl: '/img/ella.jpg', socials: { tiktok: 'https://www.tiktok.com/@ellaawiuwiu' } },
  { id: 8, name: 'Kanna', role: { id: 'Vokalis', en: 'Vocalist', ja: 'ボーカリスト', ko: '보컬리스트' }, imageUrl: '/img/kanna.jpg', socials: { tiktok: 'https://www.tiktok.com/@luvykanna' } },
  { id: 9, name: 'Nadd', role: { id: 'Vokalis', en: 'Vocalist', ja: 'ボーカリスト', ko: '보컬리스트' }, imageUrl: '/img/nadd.jpg', socials: { tiktok: 'https://www.tiktok.com/@ioononadd' } },
  { id: 10, name: 'Nadia', role: { id: 'Vokalis', en: 'Vocalist', ja: 'ボーカリスト', ko: '보컬리스트' }, imageUrl: '/img/nadia.jpg', socials: { tiktok: 'https://www.tiktok.com/@nadsukacokelat' } },
  { id: 11, name: 'Jelly', role: { id: 'Vokalis', en: 'Vocalist', ja: 'ボーカリスト', ko: '보컬리스트' }, imageUrl: 'img/jelly.jpg', socials: { tiktok: 'https://www.tiktok.com/@j3llyi' } },
];

export const articles: Article[] = [
  {
    id: 1,
    title: { id: 'Daily Cover Terbaru: Lysander & Shalvatore - Cintanya Aku', en: 'New Daily Cover: Lysander & Shalvatore - Cintanya Aku', ja: '新作デイリーカバー：リサンダー＆シャルヴァトーレ「Cintanya Aku」', ko: '새 데일리 커버: 리산더 & 샬바토레 - Cintanya Aku' },
    date: '2024-07-28',
    category: { id: 'Rilisan Musik', en: 'Music Release', ja: '音楽リリース', ko: '음악 발매' },
    imageUrl: '/img/cintanya-aku.jpg',
    excerpt: { id: "Lysander Lee dan Shalvatore berkolaborasi dalam cover emosional lagu populer 'Cintanya Aku' oleh Arsy Widianto & Tiara Andini.", en: "Lysander Lee and Shalvatore collaborate on an emotional cover of the popular song 'Cintanya Aku' by Arsy Widianto & Tiara Andini.", ja: 'リサンダー・リーとシャルヴァトーレが、Arsy Widianto & Tiara Andiniの人気曲「Cintanya Aku」を感情豊かにカバーでコラボレーション。', ko: '리산더 리와 샬바토레가 Arsy Widianto & Tiara Andini의 인기곡 Cintanya Aku를 감성적인 커버로 콜라보합니다.' },
    content: { id: "Dalam rilisan daily cover terbaru kami, dua vokalis andalan LU:X, Lysander Lee dan Shalvatore, mempersembahkan interpretasi mereka yang menyentuh dari lagu hits 'Cintanya Aku'. Dengan harmoni yang memukau dan penghayatan yang mendalam, mereka berhasil membawa nuansa baru ke dalam lagu yang sudah dicintai banyak orang ini. Proyek ini menunjukkan sinergi luar biasa antara kedua anggota dan dedikasi mereka untuk terus menghasilkan karya berkualitas. Saksikan karya lengkapnya di media sosial kami!", en: "In our latest daily cover release, two of LU:X's powerhouse vocalists, Lysander Lee and Shalvatore, present their touching interpretation of the hit song 'Cintanya Aku'. With stunning harmonies and deep emotional delivery, they successfully bring a new nuance to this widely loved song. This project showcases the incredible synergy between the two members and their dedication to continuously producing high-quality work. Check out the full piece on our social media!", ja: '最新のデイリーカバーリリースでは、LU:Xの誇る二人のボーカリスト、リサンダー・リーとシャルヴァトーレがヒット曲「Cintanya Aku」の感動的な解釈を披露します。見事なハーモニーと深い感情表現で、多くの人々に愛されているこの曲に新たなニュアンスをもたらしました。このプロジェクトは、二人のメンバー間の素晴らしい相乗効果と、高品質な作品を継続的に生み出す彼らの献身を示しています。私たちのソーシャルメディアで完全版をご覧ください！', ko: '최신 데일리 커버 릴리스에서 LU:X의 두 파워풀한 보컬리스트, 리산더 리와 샬바토레가 히트곡 "Cintanya Aku"에 대한 감동적인 해석을 선보입니다. 놀라운 하모니와 깊은 감정 전달로, 널리 사랑받는 이 노래에 새로운 뉘앙스를 성공적으로 불어넣었습니다. 이 프로젝트는 두 멤버 간의 놀라운 시너지와 고품질의 작품을 지속적으로 제작하려는 그들의 헌신을 보여줍니다. 저희 소셜 미디어에서 전체 작품을 확인하세요!' },
  },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: { id: 'Apa itu LU:X OFFICIAL?', en: 'What is LU:X OFFICIAL?', ja: 'LU:X OFFICIALとは何ですか？', ko: 'LU:X OFFICIAL이란 무엇인가요?' },
    answer: { id: 'LU:X OFFICIAL adalah komunitas cover yang dirancang khusus untuk para coverist yang ingin mengembangkan bakat bernyanyi dan menjadi wadah untuk bersosialisasi layaknya keluarga virtual. Kami berfokus pada kolaborasi dan pertumbuhan bersama.', en: 'LU:X OFFICIAL is a cover community specially designed for coverists who want to develop their singing talent and serve as a platform for socializing like a virtual family. We focus on collaboration and mutual growth.', ja: 'LU:X OFFICIALは、歌の才能を伸ばしたいカバリストのために特別に設計されたカバーコミュニティであり、仮想家族のように交流するためのプラットフォームとして機能します。私たちはコラボレーションと相互の成長に焦点を当てています。', ko: 'LU:X OFFICIAL은 노래 재능을 개발하고자 하는 커버리스트들을 위해 특별히 설계된 커버 커뮤니티로, 가상 가족처럼 사교할 수 있는 플랫폼 역할을 합니다. 저희는 협업과 상호 성장에 중점을 둡니다.' },
  },
  {
    id: 2,
    question: { id: 'Apakah LU:X OFFICIAL adalah sebuah agensi?', en: 'Is LU:X OFFICIAL an agency?', ja: 'LU:X OFFICIALはエージェンシーですか？', ko: 'LU:X OFFICIAL은 소속사인가요?' },
    answer: { id: 'Bukan. Kami menggunakan sistem Non-Agency yang memberikan kebebasan dan fleksibilitas bagi para anggota untuk mengembangkan diri tanpa tekanan atau struktur yang kaku seperti agensi pada umumnya.', en: 'No. We use a Non-Agency system that provides freedom and flexibility for members to develop themselves without the pressure or rigid structure of a typical agency.', ja: 'いいえ。私たちは、典型的なエージェンシーのようなプレッシャーや厳格な構造なしに、メンバーが自己を成長させるための自由と柔軟性を提供する非エージェンシーシステムを採用しています。', ko: '아닙니다. 저희는 일반적인 소속사와 같은 압박이나 경직된 구조 없이 멤버들이 자신을 개발할 수 있는 자유와 유연성을 제공하는 비소속사 시스템을 사용합니다.' },
  },
  {
    id: 3,
    question: { id: 'Bagaimana cara bergabung dengan LU:X OFFICIAL?', en: 'How can I join LU:X OFFICIAL?', ja: 'LU:X OFFICIALに参加するにはどうすればよいですか？', ko: 'LU:X OFFICIAL에 어떻게 가입할 수 있나요?' },
    answer: { id: 'Saat ini, penerimaan anggota baru dilakukan secara periodik melalui audisi atau undangan. Ikuti terus media sosial kami untuk pengumuman open recruitment selanjutnya!', en: 'Currently, new member recruitment is done periodically through auditions or invitations. Follow our social media for announcements about the next open recruitment!', ja: '現在、新規メンバーの募集はオーディションや招待を通じて定期的に行っています。次回のオープンリクルートメントのお知らせは、私たちのソーシャルメディアをフォローしてください！', ko: '현재 신입 회원 모집은 오디션이나 초대를 통해 주기적으로 이루어집니다. 다음 공개 모집에 대한 공지는 저희 소셜 미디어를 팔로우해 주세요!' },
  },
  {
    id: 4,
    question: { id: 'Apa saja kegiatan yang dilakukan di komunitas ini?', en: 'What activities are there in this community?', ja: 'このコミュニティではどのような活動がありますか？', ko: '이 커뮤니티에서는 어떤 활동을 하나요?' },
    answer: { id: 'Kegiatan utama kami adalah memproduksi proyek cover lagu bersama. Selain itu, kami juga mengadakan sesi sharing, workshop vokal, dan kegiatan bonding lainnya untuk mempererat hubungan antar anggota.', en: 'Our main activity is producing collaborative song cover projects. Additionally, we also hold sharing sessions, vocal workshops, and other bonding activities to strengthen relationships among members.', ja: '私たちの主な活動は、共同で楽曲カバープロジェクトを制作することです。さらに、メンバー間の関係を強化するために、共有セッション、ボーカルワークショップ、その他の絆を深める活動も開催しています。', ko: '저희의 주요 활동은 공동으로 노래 커버 프로젝트를 제작하는 것입니다. 또한, 멤버 간의 관계를 강화하기 위해 공유 세션, 보컬 워크숍 및 기타 유대 강화 활동도 개최합니다.' },
  },
];

export const testimonials: [] = [];

export const galleryItems: GalleryItem[] = [
  { id: 1, title: { id: 'Sesi Rekaman', en: 'Recording Session', ja: 'レコーディングセッション', ko: '녹음 세션' }, imageUrl: 'https://picsum.photos/seed/gallery1/500/700' },
  { id: 2, title: { id: 'Pemotretan Grup', en: 'Group Photoshoot', ja: 'グループ撮影', ko: '그룹 촬영' }, imageUrl: 'https://picsum.photos/seed/gallery2/500/800' },
  { id: 3, title: { id: 'Latihan Vokal', en: 'Vocal Practice', ja: 'ボーカル練習', ko: '보컬 연습' }, imageUrl: 'https://picsum.photos/seed/gallery3/500/600' },
  { id: 4, title: { id: 'Di Balik Layar', en: 'Behind The Scenes', ja: '舞台裏', ko: '비하인드 씬' }, imageUrl: 'https://picsum.photos/seed/gallery4/500/750' },
  { id: 5, title: { id: 'Pertemuan Tim', en: 'Team Meeting', ja: 'チームミーティング', ko: '팀 미팅' }, imageUrl: 'https://picsum.photos/seed/gallery5/500/500' },
  { id: 6, title: { id: 'Acara Komunitas', en: 'Community Event', ja: 'コミュニティイベント', ko: '커뮤니티 이벤트' }, imageUrl: 'https://picsum.photos/seed/gallery6/500/850' },
];


export const textContent: Strings = {
  // General
  luxOfficial: { id: 'LU:X OFFICIAL', en: 'LU:X OFFICIAL', ja: 'LU:X OFFICIAL', ko: 'LU:X OFFICIAL' },
  viewMore: { id: 'Lihat Selengkapnya', en: 'View More', ja: 'もっと見る', ko: '더 보기' },
  
  // Header
  home: { id: 'Beranda', en: 'Home', ja: 'ホーム', ko: '홈' },
  about: { id: 'Tentang', en: 'About', ja: '概要', ko: '소개' },
  members: { id: 'Anggota', en: 'Members', ja: 'メンバー', ko: '멤버' },
  news: { id: 'Berita & Kegiatan', en: 'News & Activities', ja: 'ニュース & 活動', ko: '뉴스 & 활동' },
  gallery: { id: 'Galeri', en: 'Gallery', ja: 'ギャラリー', ko: '갤러리' },
  contact: { id: 'Kontak', en: 'Contact', ja: 'お問い合わせ', ko: '문의' },
  faq: { id: 'FAQ', en: 'FAQ', ja: 'よくある質問', ko: '자주 묻는 질문' },

  // Home Page (Old)
  heroTitle: { id: 'Komunitas Kreatif. Musik. Gairah.', en: 'Creative Community. Music. Passion.', ja: '創造的なコミュニティ。音楽。情熱。', ko: '창의적인 커뮤니티. 음악. 열정.' },
  heroSubtitle: { id: 'Jelajahi dunia cover lagu LU:X OFFICIAL. Temukan karya kami, kenali anggota kami, dan nikmati perjalanan musikal kami.', en: 'Explore the world of LU:X OFFICIAL song covers. Discover our work, meet our members, and enjoy our musical journey.', ja: 'LU:X OFFICIALの楽曲カバーの世界を探検しましょう。私たちの作品を発見し、メンバーに会い、音楽の旅を楽しんでください。', ko: 'LU:X OFFICIAL의 노래 커버 세계를 탐험해 보세요. 저희의 작품을 발견하고, 멤버들을 만나고, 음악 여정을 즐겨보세요.' },
  visitSocials: { id: 'Kunjungi Media Sosial', en: 'Visit Our Socials', ja: 'ソーシャルメディアをご覧ください', ko: '소셜 미디어 방문하기' },
  meetMembers: { id: 'Kenali Anggota Kami', en: 'Meet Our Members', ja: 'メンバー紹介', ko: '멤버 소개' },
  latestNews: { id: 'Berita & Kegiatan Terbaru', en: 'Latest News & Activities', ja: '最新ニュース & 活動', ko: '최신 뉴스 & 활동' },
  upcomingSchedule: { id: 'Jadwal Mendatang', en: 'Upcoming Schedule', ja: '今後のスケジュール', ko: '예정된 일정' },
  testimonials: { id: 'Apa Kata Mereka', en: 'What They Say', ja: 'お客様の声', ko: '그들의 말' },
  workshopAugust: { id: 'Workshop Tari Agustus', en: 'August Dance Workshop', ja: '8月のダンスワークショップ', ko: '8월 댄스 워크숍' },
  newCoverRelease: { id: 'Rilisan Cover Baru', en: 'New Cover Release', ja: '新しいカバーのリリース', ko: '새 커버 발매' },

  // New Homepage Content
  welcomeTitle: { id: 'Selamat Datang di LU:X OFFICIAL', en: 'Welcome to LU:X OFFICIAL', ja: 'LU:X OFFICIALへようこそ', ko: 'LU:X OFFICIAL에 오신 것을 환영합니다' },
  welcomeSubtitle: { id: 'Komunitas Cover yang Dirancang untuk Mengembangkan Bakat Bernyanyi', en: 'A Cover Community Designed to Develop Singing Talent', ja: '歌の才能を伸ばすために設計されたカバーコミュニティ', ko: '노래 재능을 키우기 위해 만들어진 커버 커뮤니티' },
  
  aboutUsTitle: { id: 'Tentang Kami', en: 'About Us', ja: '私たちについて', ko: '우리에 대해' },
  aboutUsText: { id: 'LU:X OFFICIAL adalah komunitas cover yang dirancang khusus untuk para coverist yang ingin mengembangkan bakat bernyanyi dan menjadi wadah untuk bersosialisasi layaknya keluarga virtual. Di sini, kita dapat:', en: 'LU:X OFFICIAL is a cover community specifically designed for coverists who want to develop their singing talent and become a place for socializing like a virtual family. Here, we can:', ja: 'LU:X OFFICIALは、歌の才能を伸ばしたいカバリストのために特別に設計されたカバーコミュニティであり、仮想家族のように交流する場所になることを目指しています。ここでは、次のことができます：', ko: 'LU:X OFFICIAL은 노래 재능을 개발하고 가상 가족처럼 사교할 수 있는 장이 되고자 하는 커버리스트들을 위해 특별히 설계된 커버 커뮤니티입니다. 여기에서 우리는 다음을 할 수 있습니다:' },
  aboutUsPoint1: { id: 'Saling mengkritik dan memberikan feedback yang konstruktif', en: 'Critique and provide constructive feedback to each other', ja: '互いに批評し、建設的なフィードバックを提供する', ko: '서로 비평하고 건설적인 피드백 제공하기' },
  aboutUsPoint2: { id: 'Belajar hal baru dan meningkatkan kemampuan bernyanyi', en: 'Learn new things and improve singing skills', ja: '新しいことを学び、歌唱力を向上させる', ko: '새로운 것을 배우고 노래 실력 향상시키기' },
  aboutUsPoint3: { id: 'Mengekspresikan diri masing-masing dengan bebas dan kreatif', en: 'Express ourselves freely and creatively', ja: '自由に創造的に自己表現する', ko: '자유롭고 창의적으로 자신을 표현하기' },
  aboutUsPoint4: { id: 'Menjalin hubungan yang erat dengan sesama anggota komunitas', en: 'Build close relationships with fellow community members', ja: 'コミュニティの仲間と緊密な関係を築く', ko: '동료 커뮤니티 멤버들과 긴밀한 관계 구축하기' },
  
  ourSystemTitle: { id: 'Sistem Kami', en: 'Our System', ja: '私たちのシステム', ko: '우리의 시스템' },
  ourSystemText: { id: 'Berbeda dengan agensi pada umumnya, LU:X OFFICIAL menggunakan sistem Non-Agency yang memberikan kebebasan dan fleksibilitas bagi para anggota untuk mengembangkan diri tanpa tekanan atau struktur yang kaku. Kami percaya bahwa dengan memberikan kebebasan dan kepercayaan kepada anggota, kita dapat menciptakan komunitas yang positif dan suportif untuk mengembangkan bakat bernyanyi.', en: 'Unlike typical agencies, LU:X OFFICIAL uses a Non-Agency system that provides freedom and flexibility for members to develop themselves without pressure or rigid structures. We believe that by giving members freedom and trust, we can create a positive and supportive community for developing singing talent.', ja: '一般的なエージェンシーとは異なり、LU:X OFFICIALは非エージェンシーシステムを採用しており、メンバーがプレッシャーや厳格な構造なしに自己を成長させるための自由と柔軟性を提供します。メンバーに自由と信頼を与えることで、歌の才能を伸ばすためのポジティブで支援的なコミュニティを創造できると信じています。', ko: '일반적인 소속사와 달리 LU:X OFFICIAL은 비소속사 시스템을 사용하여 멤버들이 압박이나 경직된 구조 없이 자신을 개발할 수 있는 자유와 유연성을 제공합니다. 멤버들에게 자유와 신뢰를 줌으로써 노래 재능을 개발하기 위한 긍정적이고 지지적인 커뮤니티를 만들 수 있다고 믿습니다.' },


  // About Page
  aboutTitle: { id: 'Tentang LU:X OFFICIAL', en: 'About LU:X OFFICIAL', ja: 'LU:X OFFICIALについて', ko: 'LU:X OFFICIAL 소개' },
  aboutP1: { id: 'LU:X OFFICIAL bukan agensi; kami adalah kolektif para coverist yang bersemangat dalam menginterpretasikan ulang berbagai lagu, dari K-Pop hingga hits internasional. Didirikan pada 8 Juli 2025, kami bersatu karena kecintaan kami pada musik, berkolaborasi dalam lingkungan yang mendukung untuk menciptakan cover lagu berkualitas tinggi.', en: 'LU:X OFFICIAL is not an agency; we are a collective of coverists passionate about reinterpreting various songs, from K-Pop to international hits. Founded on July 8, 2025, we are united by our love for music, collaborating in a supportive environment to create high-quality song covers.', ja: 'LU:X OFFICIALはエージェンシーではありません。私たちは、K-POPから国際的なヒット曲まで、さまざまな曲を再解釈することに情熱を注ぐカバリストの集団です。2025年7月8日に設立され、音楽への愛で結ばれ、支援的な環境で協力し、高品質の楽曲カバーを制作しています。', ko: 'LU:X OFFICIAL은 소속사가 아닙니다. 저희는 K팝부터 해외 히트곡까지 다양한 노래를 재해석하는 데 열정적인 커버리스트들의 집합체입니다. 2025년 7月 8일에 설립된 저희는 음악에 대한 사랑으로 뭉쳐, 지지적인 환경에서 협력하여 고품질의 노래 커버를 만듭니다.' },
  visionTitle: { id: 'Visi & Misi Kami', en: 'Our Vision & Mission', ja: '私たちのビジョンとミッション', ko: '우리의 비전 & 미션' },
  visionText: { id: 'Visi kami adalah menjadi platform terkemuka bagi talenta penyanyi untuk bersinar dan terhubung dengan audiens global melalui cover lagu. Misi kami adalah untuk secara konsisten menghasilkan interpretasi lagu yang otentik dan inovatif yang menginspirasi dan menghibur.', en: 'Our vision is to be a leading platform for singing talents to shine and connect with a global audience through song covers. Our mission is to consistently produce authentic and innovative song interpretations that inspire and entertain.', ja: '私たちのビジョンは、歌の才能が輝き、楽曲カバーを通じて世界中の視聴者とつながるための主要なプラットフォームになることです。私たちの使命は、感動と楽しさを与える本物で革新的な楽曲解釈を一貫して生み出すことです。', ko: '저희의 비전은 노래 커버를 통해 노래 재능이 빛나고 전 세계 관객과 연결될 수 있는 선도적인 플랫폼이 되는 것입니다. 저희의 미션은 영감과 즐거움을 주는 진정성 있고 혁신적인 노래 해석을 꾸준히 제작하는 것입니다.' },
  nonAgencySystemTitle: { id: 'Sistem Non-Agensi Kami', en: 'Our Non-Agency System', ja: '私たちの非エージェンシーシステム', ko: '우리의 비소속사 시스템' },
  nonAgencySystemText: { id: 'Kami beroperasi dengan model non-agensi yang unik. Ini berarti setiap anggota mempertahankan otonomi kreatif mereka sambil berkontribusi pada tujuan kolektif grup. Struktur ini memupuk kebebasan, tanggung jawab bersama, dan lingkungan di mana kreativitas benar-benar dapat berkembang.', en: 'We operate on a unique non-agency model. This means each member retains their creative autonomy while contributing to the group\'s collective goals. This structure fosters freedom, shared responsibility, and an environment where creativity can truly flourish.', ja: '私たちは独自の非エージェンシーモデルで運営しています。これは、各メンバーがグループの共同目標に貢献しながら、創造的な自律性を維持することを意味します。この構造は、自由、共同責任、そして創造性が真に花開くことができる環境を育みます。', ko: '저희는 독특한 비소속사 모델로 운영됩니다. 이는 각 멤버가 그룹의 공동 목표에 기여하면서 창의적인 자율성을 유지함을 의미합니다. 이 구조는 자유, 공동 책임, 그리고 창의성이 진정으로 번성할 수 있는 환경을 조성합니다.' },

  // Members Page
  membersTitle: { id: 'Anggota LU:X OFFICIAL', en: 'LU:X OFFICIAL Members', ja: 'LU:X OFFICIAL メンバー', ko: 'LU:X OFFICIAL 멤버' },

  // News Page
  newsTitle: { id: 'Berita & Kegiatan', en: 'News & Activities', ja: 'ニュース & 活動', ko: '뉴스 & 활동' },
  allCategories: {id: 'Semua Kategori', en: 'All Categories', ja: 'すべてのカテゴリ', ko: '모든 카테고리'},
  filterByCategory: {id: 'Filter berdasarkan kategori', en: 'Filter by category', ja: 'カテゴリで絞り込み', ko: '카테고리별로 필터링'},
  backToNews: { id: 'Kembali ke Berita', en: 'Back to News', ja: 'ニュースに戻る', ko: '뉴스로 돌아가기' },

  // Gallery Page
  galleryTitle: { id: 'Galeri Kami', en: 'Our Gallery', ja: '私たちのギャラリー', ko: '우리 갤러리' },
  gallerySubtitle: { id: 'Momen-momen yang tertangkap dari perjalanan musikal kami bersama.', en: 'Captured moments from our musical journey together.', ja: '私たちの音楽の旅から捉えられた瞬間。', ko: '우리의 음악 여정에서 포착된 순간들.' },

  // Contact Page
  contactTitle: { id: 'Hubungi Kami', en: 'Get In Touch', ja: 'お問い合わせ', ko: '연락하기' },
  contactSubtitle: { id: 'Punya pertanyaan, proposal kolaborasi, atau hanya ingin menyapa? Kami ingin mendengar dari Anda.', en: 'Have a question, a collaboration proposal, or just want to say hi? We\'d love to hear from you.', ja: 'ご質問、コラボレーションのご提案、または単にあいさつをしたいですか？ご連絡をお待ちしております。', ko: '질문, 협업 제안, 또는 그냥 인사하고 싶으신가요? 여러분의 연락을 기다립니다.' },
  nameLabel: { id: 'Nama Lengkap', en: 'Full Name', ja: '氏名', ko: '성명' },
  emailLabel: { id: 'Alamat Email', en: 'Email Address', ja: 'メールアドレス', ko: '이메일 주소' },
  messageLabel: { id: 'Pesan Anda', en: 'Your Message', ja: 'メッセージ', ko: '메시지' },
  submitButton: { id: 'Kirim Pesan', en: 'Send Message', ja: 'メッセージを送信', ko: '메시지 보내기' },
  submittingButton: { id: 'Mengirim...', en: 'Sending...', ja: '送信中...', ko: '보내는 중...' },
  successMessage: { id: 'Terima kasih! Pesan Anda telah terkirim.', en: 'Thank you! Your message has been sent.', ja: 'ありがとうございます！メッセージが送信されました。', ko: '감사합니다! 메시지가 전송되었습니다.' },
  errorMessage: { id: 'Oops! Terjadi kesalahan. Silakan coba lagi.', en: 'Oops! Something went wrong. Please try again.', ja: 'おっと！問題が発生しました。もう一度お試しください。', ko: '이런! 문제가 발생했습니다. 다시 시도해 주세요.' },
  followUs: {id: 'Ikuti Kami Juga Di', en: 'Also Follow Us On', ja: 'こちらもフォローしてください', ko: '여기서도 우리를 팔로우하세요'},

  // FAQ Page
  faqTitle: { id: 'Pertanyaan yang Sering Diajukan', en: 'Frequently Asked Questions', ja: 'よくある質問', ko: '자주 묻는 질문' },
  faqSubtitle: { id: 'Temukan jawaban cepat untuk pertanyaan umum tentang komunitas kami.', en: 'Find quick answers to common questions about our community.', ja: '私たちのコミュニティに関する一般的な質問に対する簡単な回答を見つけてください。', ko: '저희 커뮤니티에 대한 일반적인 질문에 대한 빠른 답변을 찾아보세요.' },

  // Footer
  copyright: { id: 'Hak Cipta', en: 'Copyright', ja: '著作権', ko: '저작권' },
  allRightsReserved: { id: 'Seluruh hak cipta dilindungi.', en: 'All rights reserved.', ja: '全著作権所有。', ko: '모든 권리 보유.' },
};