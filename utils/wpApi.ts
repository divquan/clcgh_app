import axios from 'axios';
//@ts-ignore
import { convert } from 'html-to-text';

const BASE_URL = 'https://clcgh.org/wp-json/wp/v2/';

const listPosts = async (): Promise<ListPostType[]> => {
  const response = await axios.get(BASE_URL + 'posts');
  const responseData = response.data as any;
  return responseData.map((data: any) => {
    return {
      imageUrl: data.jetpack_featured_media_url,
      id: data.id,
      slug: data.slug,
      content: convert(data.content.rendered),
      title: data.title.rendered,
      excerpt: convert(data.excerpt.rendered),
    };
  });
};

const searchPosts = async (
  searchTerm: string
): Promise<SearchPostResponseType[]> => {
  const respose = await axios.get(BASE_URL + 'search?search=' + searchTerm);
  const responseData = respose.data;
  return responseData.map((data: any) => {
    return {
      id: data.id,
      title: data.title,
    };
  });
};

const getPostById = async (id: string): Promise<ListPostType> => {
  const response = await axios.get(BASE_URL + 'posts/' + id);
  const data = response.data as any;
  console.log(data);
  return {
    imageUrl: data.jetpack_featured_media_url,
    id: data.id,
    slug: data.slug,
    content: convert(data.content.rendered),
    title: data.title.rendered,
    excerpt: convert(data.excerpt.rendered),
  };
};
export { listPosts, searchPosts, getPostById };

export type ListPostType = {
  imageUrl: string;
  id: string;
  slug: string;
  content: string;
  title: string;
  excerpt: string;
};

export type SearchPostResponseType = {
  title: string;
  id: number;
};
const some = [
  {
    id: 4159,
    date: '2024-08-31T18:45:13',
    date_gmt: '2024-08-31T18:45:13',
    guid: {
      rendered: 'https://clcgh.org/?p=4159',
    },
    modified: '2024-08-31T21:07:53',
    modified_gmt: '2024-08-31T21:07:53',
    slug: 'profile-of-joshua-billy-graham',
    status: 'publish',
    type: 'post',
    link: 'https://clcgh.org/profile-of-joshua-billy-graham/',
    title: {
      rendered: 'P​ROFILE OF JOSHUA BILLY GRAHAM',
    },
    content: {
      rendered:
        '<div class="0ce5945d070e9b07b51b85fac05cf8d5" data-index="1" style="float: none; margin:10px 0 10px 0; text-align:center;">\n<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3773562434057650"\r\n     crossorigin="anonymous"></script>\n</div>\n<div dir="auto"><img fetchpriority="high" decoding="async" class="alignnone  wp-image-4166" src="http://clcgh.org/wp-content/uploads/2024/08/IMG-20240831-WA0057-300x251.jpg" alt="" width="892" height="746" srcset="https://clcgh.org/wp-content/uploads/2024/08/IMG-20240831-WA0057-300x251.jpg 300w, https://clcgh.org/wp-content/uploads/2024/08/IMG-20240831-WA0057-600x503.jpg 600w, https://clcgh.org/wp-content/uploads/2024/08/IMG-20240831-WA0057.jpg 720w" sizes="(max-width: 892px) 100vw, 892px" /></div>\n<div dir="auto">Joshua Billy Graham is a prophet of God and general overseer of Heavenly Seed Chapel International, Kumasi, Ghana’s second largest city. He also serves as a missionary, singer, an instrumentalist and a teacher, who has a mandate to lead people to Jesus Christ and into God’s blessings, through the proclamation of the Gospel of Jesus Christ, with numerous signs and wonders accompanying.</div>\n<div dir="auto"></div>\n<div dir="auto"></div>\n<div dir="auto">His prophetic and evangelistic ministries, spanning over twenty years, have impacted many people to know Christ and taste the miraculous power of God by which dead people have been raised, the sick healed and those in bondage delivered and helped to enjoy breakthroughs.</div>\n<div dir="auto">Proph. Billy as he is affectionately called by many holds Bachelor’s Degree in Theology with Administration, from Christian Service University, Ghana. He is also a distinguished product of Christian Leadership Institute, Sunyani, Ghana, where he obtained Advanced Diploma in Theology with Leadership Skills.</div>\n<div dir="auto"></div>\n<div dir="auto">Joshua Billy Graham is a Ghanaian by birth and was brought up by his Ghanaian parents who were Christian ministers in Christ Apostolic Church International.</div>\n<div dir="auto"></div>\n<div dir="auto">His late father, Rev. Samuel Nyame Adom, named him after Joshua, Moses’ successor, in the Bible and renowned televangelist, Billy Graham, from United States of America.</div>\n<div dir="auto"></div>\n<div dir="auto">According to the late Rev. Samuel Nyame Adom, he went to Evangelist Billy Graham’s conference in Amsterdam in 1986, where the international evangelist showed him great kindness. Nyame Adom was in the conference in Amsterdam when news reached him that his wife (Late Madam Rachael Akua Kyerewaah) had given birth to a bouncing baby boy in Ghana. He, therefore, excitedly decided to name his child after evangelist Billy Graham, who gave him an excellent reception and took him as a friend during and after the conference.</div>\n<div dir="auto"></div>\n<div dir="auto">Currently, Prophet Joshua Billy Graham is married with Prophetess Joyce Linn Graham, who is a co-founder of the church and are blessed with three children: Genesa Graham Young, Caleb Billy Graham Junior and Gad Sams Graham.</div>\n<div dir="auto"></div>\n<div dir="auto"></div>\n<div dir="auto"></div>\n<div dir="auto"></div>\n<!--CusAds0-->\n<div style="font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;"></div>',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>Joshua Billy Graham is a prophet of God and general overseer of Heavenly Seed Chapel International, Kumasi, Ghana’s second largest city. He also serves as a missionary, singer, an instrumentalist and a teacher, who has a mandate to lead people to Jesus Christ and into God’s blessings, through the proclamation of the Gospel of Jesus &hellip;</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 4166,
    comment_status: 'closed',
    ping_status: 'closed',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      footnotes: '',
    },
    categories: [1164],
    tags: [],
    class_list: [
      'post-4159',
      'post',
      'type-post',
      'status-publish',
      'format-standard',
      'has-post-thumbnail',
      'hentry',
      'category-pastors-profile',
    ],
    jetpack_featured_media_url:
      'https://clcgh.org/wp-content/uploads/2024/08/IMG-20240831-WA0057.jpg',
    _links: {
      self: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4159',
        },
      ],
      collection: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/comments?post=4159',
        },
      ],
      'version-history': [
        {
          count: 6,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4159/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 4163,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4159/revisions/4163',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/media/4166',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/media?parent=4159',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/categories?post=4159',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/tags?post=4159',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 4155,
    date: '2024-08-31T10:56:48',
    date_gmt: '2024-08-31T10:56:48',
    guid: {
      rendered: 'https://clcgh.org/?p=4155',
    },
    modified: '2024-08-31T10:58:12',
    modified_gmt: '2024-08-31T10:58:12',
    slug: 'people-who-have-supernaturally-encountered-jesus-christ-2',
    status: 'publish',
    type: 'post',
    link: 'https://clcgh.org/people-who-have-supernaturally-encountered-jesus-christ-2/',
    title: {
      rendered: 'People Who Have Supernaturally Encountered Jesus Christ (2)',
    },
    content: {
      rendered:
        '<p class="p1"><img decoding="async" class="alignnone size-medium wp-image-3408" src="http://clcgh.org/wp-content/uploads/2024/02/how-to-strengthen-your-relationship-with-god-300x120.webp" alt="" width="300" height="120" srcset="https://clcgh.org/wp-content/uploads/2024/02/how-to-strengthen-your-relationship-with-god-300x120.webp 300w, https://clcgh.org/wp-content/uploads/2024/02/how-to-strengthen-your-relationship-with-god-1024x410.webp 1024w, https://clcgh.org/wp-content/uploads/2024/02/how-to-strengthen-your-relationship-with-god-768x307.webp 768w, https://clcgh.org/wp-content/uploads/2024/02/how-to-strengthen-your-relationship-with-god.webp 1200w" sizes="(max-width: 300px) 100vw, 300px" /></p>\n<p class="p1"><span class="s1">In the Part One, I indicated that some Christians have encountered the Lord Jesus Christ in dreams, visions or trances. </span></p>\n<p class="p1"><span class="s1">I quoted scriptural verses, showing encounters the apostle Paul had with Jesus Christ after His ascension.</span></p>\n<p class="p1"><span class="s1">I also mentioned the late Prophet Kenneth Hagin, Evangelist Dag Heward-Mills and other Christians who said they have seen the Lord in visions and dreams in this generation. I believe their reports that Christ Jesus lives and appears to whoever He wills. </span></p>\n<p class="p1"><span class="s1">Now, in these special appearances, the Lord often communicates with His disciples as He speaks words of comfort, edification and even condemnation to them in reaction to their works. </span></p>\n<p class="p1"><span class="s1">In this part, I would to discuss the second way by which all true believers encounter the Lord Jesus. To understand this, it is important for me to reveal to you who the Holy Spirit really is.</span></p>\n<p class="p1"><span class="s1">Do you know that the Holy Spirit who dwells in you, sealing you for the day of redemption is the Spirit of Christ Jesus? I am not making this up; the Bible says so.</span></p>\n<p class="p1"><span class="s1">Scripture says that the Holy Spirit is also called the Spirit of the Lord Jesus Christ. Paul, the apostle, had this revelation about Christ and explained it to the Corinthian church:</span></p>\n<p class="p1"><span class="s1">“NOW THE LORD IS THE SPIRIT, and where the Spirit of the Lord is, there is freedom” (2 Corinthians 3:17). </span></p>\n<p class="p1"><span class="s1">Again, Paul teaches to the church in Galatia that the Spirit who dwells in the hearts of believers is the Spirit of the Lord Jesus Christ.</span></p>\n<p class="p1"><span class="s1">“And because you are sons, God has sent THE SPIRIT OF HIS SON INTO OUR HEARTS, crying, “Abba! Father” (Galatians 4:6)! </span></p>\n<p class="p1"><span class="s1">“You, however, are not in the flesh but in the Spirit, if in fact the Spirit of God dwells in you. ANYONE WHO DOES NOT HAVE THE SPIRIT OF CHRIST does not belong to him” (Romans 8:9).</span></p><div class="0ce5945d070e9b07b51b85fac05cf8d5" data-index="2" style="float: none; margin:10px 0 10px 0; text-align:center;">\n<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3773562434057650"\r\n     crossorigin="anonymous"></script>\n</div>\n\n<p class="p1"><span class="s1">You can clearly see that the Helper and Comforter, the Spirit of truth, who Christ promised would come to dwell in the hearts of believers, to teach and guide them was He Himself. </span></p>\n<p class="p1"><span class="s1">If you are really a born again believer, then, I want you to know that you have encountered Christ Jesus. In other words, Christ Jesus manifests Himself to people through the indwelling of the Holy Spirit in the heart of believers.</span></p>\n<p class="p1"><span class="s1">I can see that this is Christ’s common manifestation to His chosen ones. The presence of the Holy Spirit in you and upon you is the fulfillment of the Lord’s promise to come back to dwell with His disciples. </span></p>\n<p class="p1"><span class="s1">“And I will ask the Father, and he will give you another Helper, to be with you forever, even the Spirit of truth, whom the world cannot receive, because it neither sees him nor knows him. YOU KNOW HIM, FOR HE DWELLS WITH YOU AND WILL BE IN YOU. I WILL NOT LEAVE YOU AS ORPHANS; I WILL COME TO YOU” (John 14:16 -18).</span></p>\n<p class="p1"><span class="s1">Examine the Scripture carefully. Jesus told the disciples that they ALREADY KNEW the Helper He would ask the Father to send to them. In verse 17 of John chapter 14, Jesus said, the Helper DWELT WITH THEM, AND WOULD BE IN THEM.</span></p>\n<p class="p1"><span class="s1">This means that the Helper was with them in their midst guiding, helping, teaching and comforting them. Who was this Helper that dwelt with the disciples? </span></p>\n<p class="p1"><span class="s1">In fact, there could be no Helper at that particular time than the Lord Jesus Christ Himself, who prayed for them, fed them, protected them, taught them and saved them.</span></p>\n<p class="p1"><span class="s1">This is confirmed by the verse 25 of John chapter 14, where Jesus explained that He was the one who was still with the disciples.</span></p>\n<p class="p1"><span class="s1">By James Quansah</span></p>\n<h3>Buy James Quansah’s Christ-centred and Gospel-focused books on Amazon today. Click <a id="1" class="tooltipstered" href="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" target="_new" rel="noreferrer noopener" data-link="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" data-button="LinkPreview">here</a> for your copy.</h3>\n<!--CusAds0-->\n<div style="font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;"></div>',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>In the Part One, I indicated that some Christians have encountered the Lord Jesus Christ in dreams, visions or trances. I quoted scriptural verses, showing encounters the apostle Paul had with Jesus Christ after His ascension. I also mentioned the late Prophet Kenneth Hagin, Evangelist Dag Heward-Mills and other Christians who said they have seen &hellip;</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 3408,
    comment_status: 'closed',
    ping_status: 'closed',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      footnotes: '',
    },
    categories: [1],
    tags: [],
    class_list: [
      'post-4155',
      'post',
      'type-post',
      'status-publish',
      'format-standard',
      'has-post-thumbnail',
      'hentry',
      'category-messages-and-teachings',
    ],
    jetpack_featured_media_url:
      'https://clcgh.org/wp-content/uploads/2024/02/how-to-strengthen-your-relationship-with-god.webp',
    _links: {
      self: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4155',
        },
      ],
      collection: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/comments?post=4155',
        },
      ],
      'version-history': [
        {
          count: 3,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4155/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 4158,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4155/revisions/4158',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/media/3408',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/media?parent=4155',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/categories?post=4155',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/tags?post=4155',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 4150,
    date: '2024-08-28T16:12:01',
    date_gmt: '2024-08-28T16:12:01',
    guid: {
      rendered: 'https://clcgh.org/?p=4150',
    },
    modified: '2024-08-29T08:51:05',
    modified_gmt: '2024-08-29T08:51:05',
    slug: 'three-things-god-expects-you-to-do-with-his-word',
    status: 'publish',
    type: 'post',
    link: 'https://clcgh.org/three-things-god-expects-you-to-do-with-his-word/',
    title: {
      rendered: 'Three Things God Expects You To Do With His Word',
    },
    content: {
      rendered:
        '<p class="p1"><img decoding="async" class="alignnone size-medium wp-image-3506" src="http://clcgh.org/wp-content/uploads/2024/03/h0dj3l85-300x200.png" alt="" width="300" height="200" srcset="https://clcgh.org/wp-content/uploads/2024/03/h0dj3l85-300x200.png 300w, https://clcgh.org/wp-content/uploads/2024/03/h0dj3l85-272x182.png 272w, https://clcgh.org/wp-content/uploads/2024/03/h0dj3l85.png 640w" sizes="(max-width: 300px) 100vw, 300px" /></p>\n<p class="p1"><span class="s1">Are you a child of God in Christ Jesus? Do you wish to grow up spiritually, educationally and mentally? Do you also desire to increase in divine wisdom and understanding, fulfill your God-given ministry and above all please God?</span></p>\n<p class="p1"><span class="s1">Do not worry. This short article is for you. It will bless your life if you commit yourself to do three things God wants you to do with His Word.</span></p>\n<p class="p1"><span class="s1">We learn these things from the life of God’s respected servant, Ezra and others, who ensured that they had good relationship with God and had His hand upon them.</span></p>\n<p class="p1"><span class="s1">“For Ezra had set his heart to study the Law of the LORD, and to do it and to teach his statutes and rules in Israel” (Ezra 7:10).</span></p>\n<p class="p1"><span class="s1">In the verse above, we read about the minister of God doing three important things with the Word of God.</span></p>\n<p class="p1"><strong><span class="s1">Study the Bible </span></strong></p>\n<p class="p1"><span class="s1">First, he set his heart to study the Law of the LORD. To grow in the grace and knowledge of Christ Jesus so as to reach dimensions in the Spirit, you need to intentionally or habitually decide to study the Bible.</span></p>\n<p class="p1"><span class="s1">Ezra took a personal decision, purposed in his heart, made a deliberate effort or determined strongly to read and learn the Law of the LORD which is the written Word of God. </span></p>\n<p class="p1"><span class="s1">The apostle Paul told young Timothy to do similar thing when he wrote to him: “Study to show thyself approved…” (2 Timothy 2:15).</span></p>\n<p class="p1"><span class="s1">Throughout the Bible, serious-minded people who walked with God were those who applied themselves assiduously to study the scriptures. Moses, Daniel, the Ethiopian Eunuch, Paul and above all the Lord Jesus Christ are great examples. </span></p>\n<p class="p1"><span class="s1">This places a responsibility on every child of God to make time and study the Bible. In other words, we must make Bible reading a priority.</span></p>\n<p class="p1"><span class="s1">This is God’s expectation. You see, it honours God to see or hear that His children are able to expose erroneous teachings and practices because they know the scriptures. </span></p>\n<p class="p1"><strong><span class="s1">Do the Word</span></strong></p>\n<p class="p1"><span class="s1">The Scripture makes it clear that Ezra did not only set his heart to study the Law, but also resolved to do it. This is the second thing Ezra did, and we must learn to do same. </span></p>\n<p class="p1"><span class="s1">God’s Word should not only be known but also be done, acted upon or lived by. This is something God expects of all His children. </span></p>\n<p class="p1"><span class="s1">The apostle James adds to this when he writes: “But be doers of the word, and not hearers only, deceiving yourself…a doer who acts, he will be blessed in his doing” (James 1:22-25).</span></p>\n<p class="p1"><span class="s1">It is difficult for a person who merely studies the Bible to be blessed. This is because the blessing of God’s Word is promised to those who do it, act it or live it.</span></p>\n<p class="p1"><span class="s1">In other words, people who read the Bible in the hope of receiving blessings without any heart decision to obey its commands deceive themselves.</span></p>\n<p class="p1"><strong><span class="s1">Teach God’s Word</span></strong></p>\n<p class="p1"><span class="s1">The third and final thing Ezra did for us to learn is that after studying the Word of God and doing, acting on or living it, he also taught it to people in Israel. </span></p>\n<p class="p1"><span class="s1">Christians who study the Bible and do what it commands also have a duty to teach it to others. Teaching the Word by explaining gospel truths to make people believe in Christ Jesus and know Him better must be every Christian’s duty.</span></p>\n<p class="p1"><span class="s1">The Lord Jesus Christ instructed His disciples to teach His commands for people to observe or keep them (Matthew 28:20). Teaching the commands of Jesus is teaching the Word of God. </span></p>\n<p class="p1"><span class="s1">In Luke 1:1, Luke wrote that Jesus Christ Himself taught the people Israel when He walked the earth.</span></p>\n<p class="p1"><span class="s1">There are several places and people you can teach the Word of God to. You can teach what your pastor teaches you. The more you teach the more you learn to know and grow.</span></p>\n<p class="p1"><span class="s1">So, learn to teach it in the community in which you live. Teach it wherever you find yourself. Teach it to your friends, spouse, children, colleagues or mates.</span></p>\n<p class="p1"><span class="s1"> By James Quansah</span></p>\n<h3>Buy James Quansah’s Christ-centred and Gospel-focused books on Amazon today. Click <a id="1" class="tooltipstered" href="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" target="_new" rel="noreferrer noopener" data-link="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" data-button="LinkPreview">here</a> for your copy.</h3>\n<!--CusAds0-->\n<div style="font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;"></div>',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>Are you a child of God in Christ Jesus? Do you wish to grow up spiritually, educationally and mentally? Do you also desire to increase in divine wisdom and understanding, fulfill your God-given ministry and above all please God? Do not worry. This short article is for you. It will bless your life if you &hellip;</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 3506,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      footnotes: '',
    },
    categories: [1],
    tags: [],
    class_list: [
      'post-4150',
      'post',
      'type-post',
      'status-publish',
      'format-standard',
      'has-post-thumbnail',
      'hentry',
      'category-messages-and-teachings',
    ],
    jetpack_featured_media_url:
      'https://clcgh.org/wp-content/uploads/2024/03/h0dj3l85.png',
    _links: {
      self: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4150',
        },
      ],
      collection: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/comments?post=4150',
        },
      ],
      'version-history': [
        {
          count: 4,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4150/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 4154,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4150/revisions/4154',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/media/3506',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/media?parent=4150',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/categories?post=4150',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/tags?post=4150',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 4146,
    date: '2024-08-26T20:17:54',
    date_gmt: '2024-08-26T20:17:54',
    guid: {
      rendered: 'https://clcgh.org/?p=4146',
    },
    modified: '2024-08-26T20:17:54',
    modified_gmt: '2024-08-26T20:17:54',
    slug: 'ministers-of-the-gospel-are-gods-portion',
    status: 'publish',
    type: 'post',
    link: 'https://clcgh.org/ministers-of-the-gospel-are-gods-portion/',
    title: {
      rendered: 'Ministers of The Gospel Are God’s Portion',
    },
    content: {
      rendered:
        '<p class="p1"><img loading="lazy" decoding="async" class="alignnone size-medium wp-image-3809" src="http://clcgh.org/wp-content/uploads/2024/06/Sarfo-Antwi-300x213.jpg" alt="" width="300" height="213" srcset="https://clcgh.org/wp-content/uploads/2024/06/Sarfo-Antwi-300x213.jpg 300w, https://clcgh.org/wp-content/uploads/2024/06/Sarfo-Antwi.jpg 719w" sizes="(max-width: 300px) 100vw, 300px" /></p>\n<p class="p1">\nThere is one thing I cry about everyday. It is about the survival of ministers of God and the propagation of the gospel in these last days.</p>\n<p class="p1"><span class="s1">Doing God’s work is not as easy as many people think. Many ministers of God come under severe spiritual, psychological and physical attacks, which cause some of them to die prematurely. </span></p>\n<p class="p1"><span class="s1">Attacks in ministry have deprived many preachers of their joy, finance, health, marriage, family and other things in their lives.</span></p>\n<p class="p1"><span class="s1">This happens because the work of ministry is sacrificial with frequent temptations, trials and persecutions. So it is only God who adequately reward His servants.</span></p>\n<p class="p1"><span class="s1">One thing many people, especially unbelievers do not realize is that the God who calls ministers uses men to bless them.</span></p>\n<p class="p1"><span class="s1">It is, therefore, sad that pastors are often illegitimately accused of collecting too much money from the congregations to live good and flamboyant lives. </span></p>\n<p class="p1"><span class="s1">This accusation is not entirely true as genuine ministers of the gospel rather refrain from peddling God’s Word to enrich themselves and use church money to address the plight of the poor and the needy.</span></p>\n<p class="p1"><span class="s1">Others have been supporting people in the areas of shelter, education, vocation training, health and accommodation without blowing the trumpet for the members of the public to know about them.</span></p>\n<p class="p1"><span class="s1">We read in the scriptures that at the time God was giving out lands to the tribes of Israel, the levitical tribe was not given any portion because God told them emphatically that; HE THE LORD was their portion.</span></p>\n<p class="p1"><span class="s1">Simply, God was saying to them that: I am your portion of inheritance for life.</span></p>\n<p class="p1"><span class="s1">“And the LORD spake unto Aaron, Thou shalt have no inheritance in their land, neither shalt thou have any part among them: I am thy part and thine inheritance among the children of Israel” (Numbers<span class="Apple-converted-space">  </span>18:20).</span></p>\n<p class="p1"><span class="s1">So, in this case, the minister of God’s portion is to believe and serve God well for his or her supply.</span></p>\n<p class="p1"><span class="s1">We must also know from scripture that food for the minister of God is offerings made by fire so far as they serve at the place of the altar, ministering to God&#8217;s special people.</span></p>\n<p class="p1"><span class="s1">“The priests the Levites, and all the tribe of Levi, shall have no part nor inheritance with Israel: they shall eat the offerings of the LORD made by fire, and his inheritance” (Deuteronomy 18:1).</span></p>\n<p class="p1"><span class="s1">So when someone becomes a pastor or an equipping minister of God, he or she must be supported by the offerings made by fire as their inheritance.</span></p>\n<p class="p1"><span class="s1">This is the reason why ministers of God are periodically seen making demands for offerings, considering the fact that that is the inheritance God has given them.</span></p>\n<p class="p1"><span class="s1">It is, therefore, inappropriate for pastors to be criticized for collecting offerings or demonize offerings for ministers of the gospel and the church in general.</span></p>\n<p class="p1"><span class="s1">Believers must learn to open their hands to a minister of God without attempting to first use the minister for family deliverance, prophecies, miracles or wanting to experience breakthrough.</span></p>\n<p class="p1"><span class="s1">Believers must learn to give freewill and appreciation offerings to their leaders to show them strong love and encourage them as they render services to God and humanity.</span></p>\n<p class="p1"><span class="s1">In these last days, we need kingdom financiers, who will put ministers of God on their pay roll to motivate them to genuinely do God&#8217;s work.</span></p>\n<p class="p1"><span class="s1">In conclusion, when we hold ministers well and take good care of them we will see good and healthy churches in various parts of the world.</span></p>\n<p class="p1"><span class="s1">By Samuel Sarfo Antwi</span></p>\n<!--CusAds0-->\n<div style="font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;"></div>',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>There is one thing I cry about everyday. It is about the survival of ministers of God and the propagation of the gospel in these last days. Doing God’s work is not as easy as many people think. Many ministers of God come under severe spiritual, psychological and physical attacks, which cause some of them &hellip;</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 3809,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      footnotes: '',
    },
    categories: [1],
    tags: [],
    class_list: [
      'post-4146',
      'post',
      'type-post',
      'status-publish',
      'format-standard',
      'has-post-thumbnail',
      'hentry',
      'category-messages-and-teachings',
    ],
    jetpack_featured_media_url:
      'https://clcgh.org/wp-content/uploads/2024/06/Sarfo-Antwi.jpg',
    _links: {
      self: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4146',
        },
      ],
      collection: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/comments?post=4146',
        },
      ],
      'version-history': [
        {
          count: 1,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4146/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 4147,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4146/revisions/4147',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/media/3809',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/media?parent=4146',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/categories?post=4146',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/tags?post=4146',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 4140,
    date: '2024-08-25T16:25:49',
    date_gmt: '2024-08-25T16:25:49',
    guid: {
      rendered: 'https://clcgh.org/?p=4140',
    },
    modified: '2024-08-25T16:27:37',
    modified_gmt: '2024-08-25T16:27:37',
    slug: 'love-in-action-the-unifying-force-that-binds-us-together',
    status: 'publish',
    type: 'post',
    link: 'https://clcgh.org/love-in-action-the-unifying-force-that-binds-us-together/',
    title: {
      rendered: 'Love in Action: The Unifying Force That Binds us Together',
    },
    content: {
      rendered:
        '<p class="p1"><img loading="lazy" decoding="async" class="alignnone size-medium wp-image-2708 alignleft" src="http://clcgh.org/wp-content/uploads/2023/05/PHOTO-2023-05-27-18-08-07-300x300.jpg" alt="" width="300" height="300" srcset="https://clcgh.org/wp-content/uploads/2023/05/PHOTO-2023-05-27-18-08-07-300x300.jpg 300w, https://clcgh.org/wp-content/uploads/2023/05/PHOTO-2023-05-27-18-08-07-150x150.jpg 150w, https://clcgh.org/wp-content/uploads/2023/05/PHOTO-2023-05-27-18-08-07-375x375.jpg 375w, https://clcgh.org/wp-content/uploads/2023/05/PHOTO-2023-05-27-18-08-07.jpg 720w" sizes="(max-width: 300px) 100vw, 300px" /></p>\n<p class="p1"><span class="s1">God’s Servant, Peter Collins Obeng </span></p>\n<p>The nation of Israel was chosen by God to be a model of unity and holiness. Their collective worship and obedience to God were meant to unify them as one nation under His rule.</p>\n<p class="p1"><span class="s1">Scripture calls believers to pursue and maintain unity within the Body of Christ and the broader human community. It consistently emphasizes the importance of living in harmony with one another. </span></p>\n<p class="p1"><span class="s1">In John 17:20-23, Jesus prayed for believers to be brought to complete unity so that the world may know that the Father sent Him. He asked the Father to make His followers one, just as He and the Father are one.</span></p>\n<p class="p1"><span class="s1">The Bible provides profound insights into the connection between love in action and unity. Love in action is the most powerful force for unity, uniquely capable of bringing people together. Love is not just a feeling—it must be demonstrated and practised. </span></p>\n<p class="p1"><span class="s1">Through acts of kindness, forgiveness, and compassion, love in action ultimately brings Christians together, acting as the glue that binds us in a perfect bond of unity (Ephesians 4:16; Colossians 3:14).</span></p>\n<p class="p1"><span class="s1">In a world marked by divisions, strife, and discord, love stands as the only enduring remedy that can bridge gaps and foster harmony.</span></p>\n<p class="p1"><span class="s1">As we love one another, we create a dwelling place for the Father and the Son, who reveal themselves through the Holy Spirit in our midst. This explains why the early church experienced the supernatural as a norm—their love for one another was a key to the acts of the Spirit (Acts 4:32-37, 5:12-16).</span></p>\n<p class="p1"><span class="s1">Again, Psalm 133 celebrates the beauty of unity among God&#8217;s covenant people, using two metaphors to describe the blessings of living together in perfect harmony.</span></p>\n<p class="p1"><span class="s1">By GOD&#8217;S servant: Peter Collins Obeng</span></p>\n<p class="p1"><span class="s1"><span class="Apple-converted-space">         </span>GRACE COVENANT GLORY</span></p>\n<!--CusAds0-->\n<div style="font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;"></div>',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>God’s Servant, Peter Collins Obeng  The nation of Israel was chosen by God to be a model of unity and holiness. Their collective worship and obedience to God were meant to unify them as one nation under His rule. Scripture calls believers to pursue and maintain unity within the Body of Christ and the broader &hellip;</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 2708,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      footnotes: '',
    },
    categories: [1],
    tags: [],
    class_list: [
      'post-4140',
      'post',
      'type-post',
      'status-publish',
      'format-standard',
      'has-post-thumbnail',
      'hentry',
      'category-messages-and-teachings',
    ],
    jetpack_featured_media_url:
      'https://clcgh.org/wp-content/uploads/2023/05/PHOTO-2023-05-27-18-08-07.jpg',
    _links: {
      self: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4140',
        },
      ],
      collection: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/comments?post=4140',
        },
      ],
      'version-history': [
        {
          count: 4,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4140/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 4144,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4140/revisions/4144',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/media/2708',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/media?parent=4140',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/categories?post=4140',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/tags?post=4140',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 4133,
    date: '2024-08-22T15:30:37',
    date_gmt: '2024-08-22T15:30:37',
    guid: {
      rendered: 'https://clcgh.org/?p=4133',
    },
    modified: '2024-08-25T21:21:34',
    modified_gmt: '2024-08-25T21:21:34',
    slug: 'people-who-have-supernaturally-encountered-jesus-christ-1',
    status: 'publish',
    type: 'post',
    link: 'https://clcgh.org/people-who-have-supernaturally-encountered-jesus-christ-1/',
    title: {
      rendered: ' People Who Have Supernaturally Encountered Jesus Christ (1)',
    },
    content: {
      rendered:
        '<p><img loading="lazy" decoding="async" class="alignnone wp-image-3383 alignleft" src="http://clcgh.org/wp-content/uploads/2024/01/CLC-Images-1-300x169.png" alt="" width="479" height="270" srcset="https://clcgh.org/wp-content/uploads/2024/01/CLC-Images-1-300x169.png 300w, https://clcgh.org/wp-content/uploads/2024/01/CLC-Images-1-1024x576.png 1024w, https://clcgh.org/wp-content/uploads/2024/01/CLC-Images-1-768x432.png 768w, https://clcgh.org/wp-content/uploads/2024/01/CLC-Images-1.png 1280w" sizes="(max-width: 479px) 100vw, 479px" /></p>\n<p>The Lord Jesus never said goodbye to His disciples when He was ascending to heaven. The reason was that He would be with them until the end of the world (Matthew 28:20).</p>\n<p>True to His words, Christ Jesus has been with His people, appearing to them, after His death, burial and resurrection, thereby proving that He is truly alive!</p>\n<p>After His resurrection, the Lord appeared to Cephas (Peter), then to His 12 apostles. Then, He appeared to more than five hundred brothers at one time. Then He appeared to James…” (1 Corinthians 15:5-7).</p>\n<p>Jesus Christ arguably manifests Himself to people in two unique ways. In this part, we wish to discuss one of them which is the Lord’s appearance to people through dreams, visions or trances.</p>\n<p>When Stephen was about to be stoned to death after testifying about Jesus to the Jews, he also saw Jesus obviously in a trance “…behold, I see the heavens opened, and the son of man standing at the right hand of God” (Acts 7:55-56).</p>\n<p>Similarly, the Lord revealed Himself to Ananias in a vision, saying, “Ananias.” and he said, here I am, Lord. and the Lord said to him, “Rise and go to the street called Straight, and at the house of Judas look for a man of Tarsus named Saul, for behold, he is praying, and he has seen in a vision a man named Ananias come in and lay his hands on him so that he might regain his sight” (Acts 9: 10- 12).</p>\n<p>Jesus also appeared to Paul in visions on several occasions after his dramatic calling and salvation (Acts 9:3-6).</p>\n<p><em>“And the Lord said to Paul one night in a vision, “Do not be afraid, but go on speaking and do not be silent, for I am with you… (Acts 18:9-10).</em></p>\n<p>He manifested Himself to Paul again: “The following night the Lord stood by him (Paul) and said, “Take courage…” (Acts 23: 11).</p>\n<p>Again, the Son of God, who is God, appeared to the apostle John on the Island called Patmos (Revelation 1:9-10).</p>\n<p>Interestingly, Jesus Christ continues to appear to people in our generation to confirm His reality, commitment to salvation and the building of His Church.</p>\n<p>The late Prophet Kenneth E. Hagin, in his book, <em>“I believe in Visions”</em> recounted how the Lord Jesus appeared to Him in visions and taught him many things concerning ministry.</p>\n<p>In Ghana, I have heard Bishop Dag Heward-Mills, explain how Jesus appeared to Him in visions. Several other Christians, today, have also seen the Lord in visions and trances.</p>\n<p>You may be wondering if He has also appeared to me. Yes, He has; that was when He healed me of a medically incurable disease between 2016 and 2019.</p>\n<p>Jesus Christ lives! And you may also experience His divine visitation one day. Someone’s unbelief does not and cannot change this truth.</p>\n<p>These encounters, therefore, should strongly inform all of us that Christ is still alive with a greater concern for the building of His church. The church is His. It is His body.</p>\n<p>So, Jesus is still committed to His declaration that HE WILL BUILD HIS CHURCH. He is not man, that he should lie, or a son of man, that he should change his mind. Has he said, and will he not do it? Or has he spoken, and will he not fulfill it (Numbers 23: 19).</p>\n<p>Men can attack and oppress the Christian Church, but no one can collapse it. Even governments with their militaries could not destroy the Church, in the past, and they cannot do it, today.</p>\n<p>By James Quansah</p>\n<h3>Buy James Quansah’s Christ-centred and Gospel-focused books on Amazon today. Click <a id="1" class="tooltipstered" href="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" target="_new" rel="noreferrer noopener" data-link="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" data-button="LinkPreview">here</a> for your copy.</h3>\n<!--CusAds0-->\n<div style="font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;"></div>',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>The Lord Jesus never said goodbye to His disciples when He was ascending to heaven. The reason was that He would be with them until the end of the world (Matthew 28:20). True to His words, Christ Jesus has been with His people, appearing to them, after His death, burial and resurrection, thereby proving that &hellip;</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 3383,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      footnotes: '',
    },
    categories: [1],
    tags: [],
    class_list: [
      'post-4133',
      'post',
      'type-post',
      'status-publish',
      'format-standard',
      'has-post-thumbnail',
      'hentry',
      'category-messages-and-teachings',
    ],
    jetpack_featured_media_url:
      'https://clcgh.org/wp-content/uploads/2024/01/CLC-Images-1.png',
    _links: {
      self: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4133',
        },
      ],
      collection: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/comments?post=4133',
        },
      ],
      'version-history': [
        {
          count: 3,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4133/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 4145,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4133/revisions/4145',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/media/3383',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/media?parent=4133',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/categories?post=4133',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/tags?post=4133',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 4130,
    date: '2024-08-19T12:32:36',
    date_gmt: '2024-08-19T12:32:36',
    guid: {
      rendered: 'https://clcgh.org/?p=4130',
    },
    modified: '2024-08-19T12:32:36',
    modified_gmt: '2024-08-19T12:32:36',
    slug: 'true-christians-are-the-aroma-of-christ-to-god-the-father',
    status: 'publish',
    type: 'post',
    link: 'https://clcgh.org/true-christians-are-the-aroma-of-christ-to-god-the-father/',
    title: {
      rendered: 'True Christians Are the Aroma of Christ to God the Father',
    },
    content: {
      rendered:
        '<p><img loading="lazy" decoding="async" class="alignnone  wp-image-2244" src="http://clcgh.org/wp-content/uploads/2023/01/image-5-300x200.png" alt="" width="578" height="385" srcset="https://clcgh.org/wp-content/uploads/2023/01/image-5-300x200.png 300w, https://clcgh.org/wp-content/uploads/2023/01/image-5-272x182.png 272w, https://clcgh.org/wp-content/uploads/2023/01/image-5.png 612w" sizes="(max-width: 578px) 100vw, 578px" /></p>\n<p>True Christians everywhere should know that they are the aroma of Christ to God in the community in which they live. The early Church lived with this knowledge, so Paul wrote:</p>\n<p><em> “For we are the AROMA OF CHRIST TO GOD among those who are being saved and among those who are perishing, to one a fragrance from death to death, to the other a fragrance from life to life” (2 Corinthians 2:15).</em></p>\n<p>According to the Merriam-Webster dictionary, the word, “aroma” means a noticeable and pleasant smell. This means that true Christians especially leaders carry the pleasant scent of Jesus Christ on themselves.</p>\n<p>Through their commitment to the preaching of the gospel of Christ, faithful apostles, prophets, evangelists, pastors, teachers and the entire Christian community are perceived as the incense crushed and burned which is smelt as sweet smelling fragrance.</p>\n<p>Children of God do not possess and emit this aroma of their own ability, but through the gifts and graces of the Holy Spirit. It is all by the grace of God. You should remember that without the Spirit of Christ, pastors will be empty and ordinary as anyone else.</p>\n<p>But by the special of grace of God, Christian ministers carry on themselves special air of dignity and honour. This comes as a result of their deep relationship with the glorified Lord, Jesus Christ, from whom all good and perfect gifts come.</p>\n<p>Through this sweet-scented presence of Christ on them, some mighty men in society kneel before them to receive prayers for healing, salvation, deliverance and all of God’s blessings.</p>\n<p>Indeed, a Christian leader is an aroma of Christ to God. This is why the Bible calls on servants of God to live above reproach and walk worthy of their calling.</p>\n<p>We must humble ourselves and do well to depend upon the grace and anointing of the Spirit of God.</p>\n<p>I pray that the Lord Himself will continue to grant us the grace to live above reproach and be faithful in abiding in Him.</p>\n<p>By James Quansah</p>\n<h3>Buy James Quansah’s Christ-centred and Gospel-focused books on Amazon today. Click <a id="1" class="tooltipstered" href="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" target="_new" rel="noreferrer noopener" data-link="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" data-button="LinkPreview">here</a> for your copy.</h3>\n<!--CusAds0-->\n<div style="font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;"></div>',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>True Christians everywhere should know that they are the aroma of Christ to God in the community in which they live. The early Church lived with this knowledge, so Paul wrote:  “For we are the AROMA OF CHRIST TO GOD among those who are being saved and among those who are perishing, to one a &hellip;</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 2244,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      footnotes: '',
    },
    categories: [1],
    tags: [],
    class_list: [
      'post-4130',
      'post',
      'type-post',
      'status-publish',
      'format-standard',
      'has-post-thumbnail',
      'hentry',
      'category-messages-and-teachings',
    ],
    jetpack_featured_media_url:
      'https://clcgh.org/wp-content/uploads/2023/01/image-5.png',
    _links: {
      self: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4130',
        },
      ],
      collection: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/comments?post=4130',
        },
      ],
      'version-history': [
        {
          count: 2,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4130/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 4132,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4130/revisions/4132',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/media/2244',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/media?parent=4130',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/categories?post=4130',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/tags?post=4130',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 4126,
    date: '2024-08-17T17:03:34',
    date_gmt: '2024-08-17T17:03:34',
    guid: {
      rendered: 'https://clcgh.org/?p=4126',
    },
    modified: '2024-08-17T17:03:34',
    modified_gmt: '2024-08-17T17:03:34',
    slug: 'showing-integrity-in-preaching-and-teaching',
    status: 'publish',
    type: 'post',
    link: 'https://clcgh.org/showing-integrity-in-preaching-and-teaching/',
    title: {
      rendered: 'Showing Integrity in Preaching and Teaching',
    },
    content: {
      rendered:
        '<p><strong> <img loading="lazy" decoding="async" class="alignnone  wp-image-2679" src="http://clcgh.org/wp-content/uploads/2023/05/clergy-e1687896422627-300x186.jpg" alt="" width="534" height="331" srcset="https://clcgh.org/wp-content/uploads/2023/05/clergy-e1687896422627-300x186.jpg 300w, https://clcgh.org/wp-content/uploads/2023/05/clergy-e1687896422627.jpg 615w" sizes="(max-width: 534px) 100vw, 534px" /></strong></p>\n<p>As Christian leaders, we must read the Bible, do what God teaches us to do and examine everything we are asked to do in the light of the Word.</p>\n<p>When we do these things, we prove to God how much we love and obey Him and His Word. Now there is no doubt that the Lord blesses those who take His Word at heart and desire to do His will.</p>\n<p>God’s will is that His ministers preach the gospel to make disciples of all nations, baptize them and teach them to keep Christ’s commands.</p>\n<p>But how should ministers preach and teach? Should they serve without checking their behaviour and motive whether they are good or bad?</p>\n<p>Certainly not! In our preaching and teaching, we must conduct ourselves well in the sight of God and men; we must serve in the manner worthy of our heavenly calling.</p>\n<p>We must not be men pleasers, deceive the saints, lord it over them, exploit them, force them to respect us, deny them the truth of God’s Word to lead them astray and fail to pray for them.</p>\n<p><em>“But just as we have been approved by God to be entrusted with the gospel, so we speak, not to please man, but to please God who tests our hearts” (1 Thessalonians 2:4). </em></p>\n<p>These were the words of Paul to Christians in Thessalonica. And these words are written to us too. As ministers, we must refrain from deceiving people and pleasing them by what we do.</p>\n<p>We must please God, and always remind ourselves that we will not be judged and rewarded by man, but by God who sees everything we do. Thus, Paul encourages us to preach the truth and avoid giving sweet talks.</p>\n<p>Many have made it their habit to preach and teach messages that excite and meet the expectations of people rather than God. Paul warns us against this.</p>\n<p><em>“For we never came with words of flattery, as you know, nor with a pretext for greed – God is witness” (1 Thessalonians 2:5).</em></p>\n<p>All these remind us that, as servants of Christ Jesus, we must learn to show integrity in our ministries to honour the name of God and avoid criticisms from our opponents.</p>\n<p>To achieve this, we need to serve with the exhortation the apostle Paul gave to Titus when he wrote: <em>“But as for you, teach what accords with sound doctrine.” (Titus 2:1).</em></p>\n<p>The apostle did not end there but continued to instruct Christian leaders to <em>“show yourself in all respect to be a model of good works, and in your teaching show integrity, dignity and sound speech that cannot be condemned, so that an opponent may be put to shame, having nothing evil to say about us” (Titus 2:7-8).</em></p>\n<p>To show integrity in the context of this teaching is to show honesty, character, goodness, morality, virtue or righteousness in ministry.</p>\n<p>It is to demonstrate sound judgment, clear conscience with right motive while ministering to God and humanity.</p>\n<p>We can demonstrate integrity in our preaching and teaching when we consider the worthiness of the offices in which God has placed us, and live above reproach by obeying the commandments of Christ Jesus.</p>\n<p>By James Quansah</p>\n<h3>Buy James Quansah’s Christ-centred and Gospel-focused books on Amazon today. Click <a id="1" class="tooltipstered" href="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" target="_new" rel="noreferrer noopener" data-link="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" data-button="LinkPreview">here</a> for your copy.</h3>\n<!--CusAds0-->\n<div style="font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;"></div>',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>As Christian leaders, we must read the Bible, do what God teaches us to do and examine everything we are asked to do in the light of the Word. When we do these things, we prove to God how much we love and obey Him and His Word. Now there is no doubt that the &hellip;</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 2679,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      footnotes: '',
    },
    categories: [1],
    tags: [],
    class_list: [
      'post-4126',
      'post',
      'type-post',
      'status-publish',
      'format-standard',
      'has-post-thumbnail',
      'hentry',
      'category-messages-and-teachings',
    ],
    jetpack_featured_media_url:
      'https://clcgh.org/wp-content/uploads/2023/05/clergy-e1687896422627.jpg',
    _links: {
      self: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4126',
        },
      ],
      collection: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/comments?post=4126',
        },
      ],
      'version-history': [
        {
          count: 2,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4126/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 4128,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4126/revisions/4128',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/media/2679',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/media?parent=4126',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/categories?post=4126',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/tags?post=4126',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 4072,
    date: '2024-08-15T11:38:13',
    date_gmt: '2024-08-15T11:38:13',
    guid: {
      rendered: 'https://clcgh.org/?p=4072',
    },
    modified: '2024-08-15T11:38:13',
    modified_gmt: '2024-08-15T11:38:13',
    slug: 'money-for-anointing',
    status: 'publish',
    type: 'post',
    link: 'https://clcgh.org/money-for-anointing/',
    title: {
      rendered: 'Money for Anointing',
    },
    content: {
      rendered:
        '<p><img loading="lazy" decoding="async" class="alignnone  wp-image-2505" src="http://clcgh.org/wp-content/uploads/2023/04/one-recieving-money-from-another-e1681577319526-300x200.webp" alt="" width="584" height="389" srcset="https://clcgh.org/wp-content/uploads/2023/04/one-recieving-money-from-another-e1681577319526-300x200.webp 300w, https://clcgh.org/wp-content/uploads/2023/04/one-recieving-money-from-another-e1681577319526-272x182.webp 272w, https://clcgh.org/wp-content/uploads/2023/04/one-recieving-money-from-another-e1681577319526.webp 390w" sizes="(max-width: 584px) 100vw, 584px" /></p>\n<p>The work of God on earth runs on the wheels of money, considering the huge expenses church leaders have to make.</p>\n<p>Parcels of land need to be purchased, buildings have to be put up, equipment have to acquired, donations to the poor have to be made, utility bills need to be paid and ministers must be supported.</p>\n<p>Moreover, vehicles and generators have to be fuelled, repair works have to be done, and radio and TV stations need to be paid for the advancement of the gospel among others.</p>\n<p>Church leaders, therefore, need to learn various methods to raise funds usually from the congregation to sponsor church programmes and activities.</p>\n<p>One way some Pentecostal and Charismatic church leaders use to raise funds is to teach and encourage Christians to give money to tap the anointing upon them.</p>\n<p>Indirectly, what these men of God teach is that Christians should buy the anointing of God. Is this doctrinally sound? Should it be tolerated? Do believers receive the anointing of the Holy Spirit by offering money?</p>\n<p>Did Moses, David, Samson, Elijah, Elisha, Jesus Christ and the biblical apostles receive their anointing by paying money for it?</p>\n<p>Clearly, this is an error or a mistake being carried out by money-conscious leaders to take money from ignorant Christians to pervert the grace of God.</p>\n<p>How many of those who give their money to tap anointing truly receive anointing upon their lives? May be, they receive a counterfeit anointing.</p>\n<p>Check throughout the Bible, and see if any child of God received the anointing of the Holy Spirit or divine empowerment by paying money for it.</p>\n<p>Have you not read about what happened to Simon, the magician, who wanted to pay money for the anointing of the Holy Spirit?</p>\n<p>Simon offered money to the apostles so that he could obtain the anointing. Peter got angry at his actions and rebuked him:</p>\n<p><em>“Peter answered: ‘May your money perish with you, because you thought you could buy the Holy Spirit” (Acts 8:20, NIV).</em></p>\n<p>Peter knew that neither the Holy Spirit nor His power was for sale. They can never be obtained with money.</p>\n<p>If the power of God was obtained with money, people like Peter and John would not have it to minister powerfully as they did.</p>\n<p>The Holy Spirit is a GIFT of God. This is a pure act of grace. It is sad how many Christians have been made to believe lies.</p>\n<p>It is sad how some pastors have been taking advantage of the ignorance of some Christians to exploit them to enrich themselves.</p>\n<p>However, many Christians do not want this error to be corrected. They resist and resent correction and sound teachings. It is not surprising because Paul prophesied about them in one of his letters to Timothy.</p>\n<p><em>“For the time is coming when people will not endure sound teaching, but having itching ears they will accumulate for themselves teachers to suit their own passions, and turn away from listening to the truth and wander off into myths” (2 Timothy 4:3).</em></p>\n<p>We should know that one key method God uses to give His Spirit to disciples of Jesus Christ is through the laying on of hands by anointed ministers with prayer.</p>\n<p>This is what Simon saw the apostles doing. Peter and John prayed with the new Christians in Samaria before laying hands on them to receive the Holy Spirit.</p>\n<p><em>“Then they laid their hands on them and they received the Holy Spirit. Now when Simon saw that the Holy Spirit was given through the laying on of the apostles’ hands, he offered them money, saying, ‘Give me this power also…” (Acts 8:17-19).</em></p>\n<p>Peter made it clear that those who decide to sell and buy the anointing of the Holy Spirit have no part or share in the ministry of the Holy Spirit, because of the unrighteousness of their hearts.</p>\n<p>He described them as wicked people. Then, in love, the apostle urged all those who have been deceived to fall into the trap of the devil to repent and pray to the Lord for the forgiveness of their sins.</p>\n<p>By James Quansah</p>\n<h3>Buy James Quansah’s Christ-centred and Gospel-focused books on Amazon today. Click <a id="1" class="tooltipstered" href="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" target="_new" rel="noreferrer noopener" data-link="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" data-button="LinkPreview">here</a> for your copy.</h3>\n<!--CusAds0-->\n<div style="font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;"></div>',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>The work of God on earth runs on the wheels of money, considering the huge expenses church leaders have to make. Parcels of land need to be purchased, buildings have to be put up, equipment have to acquired, donations to the poor have to be made, utility bills need to be paid and ministers must &hellip;</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 2505,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      footnotes: '',
    },
    categories: [1],
    tags: [],
    class_list: [
      'post-4072',
      'post',
      'type-post',
      'status-publish',
      'format-standard',
      'has-post-thumbnail',
      'hentry',
      'category-messages-and-teachings',
    ],
    jetpack_featured_media_url:
      'https://clcgh.org/wp-content/uploads/2023/04/one-recieving-money-from-another-e1681577319526.webp',
    _links: {
      self: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4072',
        },
      ],
      collection: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/comments?post=4072',
        },
      ],
      'version-history': [
        {
          count: 2,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4072/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 4074,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4072/revisions/4074',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/media/2505',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/media?parent=4072',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/categories?post=4072',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/tags?post=4072',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 4070,
    date: '2024-08-14T11:37:19',
    date_gmt: '2024-08-14T11:37:19',
    guid: {
      rendered: 'https://clcgh.org/?p=4070',
    },
    modified: '2024-08-14T11:37:19',
    modified_gmt: '2024-08-14T11:37:19',
    slug: 'god-is-aware-of-the-message-we-want-to-preach',
    status: 'publish',
    type: 'post',
    link: 'https://clcgh.org/god-is-aware-of-the-message-we-want-to-preach/',
    title: {
      rendered: 'God is Aware of the Message We Want to Preach',
    },
    content: {
      rendered:
        '<p><img loading="lazy" decoding="async" class="alignnone  wp-image-3433" src="http://clcgh.org/wp-content/uploads/2024/02/bible-3-e1692290438966-300x144.jpeg" alt="" width="550" height="264" srcset="https://clcgh.org/wp-content/uploads/2024/02/bible-3-e1692290438966-300x144.jpeg 300w, https://clcgh.org/wp-content/uploads/2024/02/bible-3-e1692290438966.jpeg 600w" sizes="(max-width: 550px) 100vw, 550px" /></p>\n<p>Church leaders often preach and teach to Christian believers when they gather to worship.  However, servants of Christ do not preach their own messages but God’s.</p>\n<p>Moreover, Christ is always aware of the message His true servants prepare to preach or teach. His ministers receive the message they must preach by the inspiration of His Spirit who dwells within them.</p>\n<p>The Psalmist knew this, so he wrote<em>: “Even before a word is on my tongue, behold, O LORD, you KNOW IT ALTOGETHER” (Psalm 139:4).</em></p>\n<p>Therefore, every church leader must be reminded that Jesus is aware of the message they prepare to preach or teach to His disciples</p>\n<p>He is also aware of the key message He has commanded all servants in all generations to preach and teach.</p>\n<p><em>“Go therefore and make disciples of all nations…teaching them to observe ALL THAT I HAVE COMMANDED YOU” (Matthew 28:19-20).</em></p>\n<p>We must also remind ourselves that we are under-shepherds, and that we shall give account of our teachings and preaching to the Chief Shepherd, our Master, on the judgment day.</p>\n<p>Many church leaders have forgotten who they really are; they have forgotten that they are not the Master, but servants.</p>\n<p>Peter, the apostle, taught that all ministers are under-shepherds, and that Christ Jesus alone is the Chief Shepherd, the only Archbishop, of all bishops (1 Peter 5:4).</p>\n<p>Understand that the Greek word translated “Chief Shepherd” in the scriptural passage above also means “Arch Bishop.”</p>\n<p>So, on the Day of Judgment, we shall give account of our teachings to the Lord Jesus. Peter, the apostle, served his generation with this idea in mind.</p>\n<p><em>“Not many of you should become teachers, my brothers, for you know that WE WHO TEACH WILL BE JUDGED WITH GREATER STRICTNESS” (James 3:1).</em></p>\n<p>By James Quansah</p>\n<h3>Buy James Quansah’s Christ-centred and Gospel-focused books on Amazon today. Click <a id="1" class="tooltipstered" href="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" target="_new" rel="noreferrer noopener" data-link="https://www.amazon.com/stores/Mr-James-Quansah/author/B0CN14K679?ref=ap_rdr&amp;isDramIntegrated=true&amp;shoppingPortalEnabled=true" data-button="LinkPreview">here</a> for your copy.</h3>\n<!--CusAds0-->\n<div style="font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;"></div>',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>Church leaders often preach and teach to Christian believers when they gather to worship.  However, servants of Christ do not preach their own messages but God’s. Moreover, Christ is always aware of the message His true servants prepare to preach or teach. His ministers receive the message they must preach by the inspiration of His &hellip;</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 3433,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      footnotes: '',
    },
    categories: [1],
    tags: [],
    class_list: [
      'post-4070',
      'post',
      'type-post',
      'status-publish',
      'format-standard',
      'has-post-thumbnail',
      'hentry',
      'category-messages-and-teachings',
    ],
    jetpack_featured_media_url:
      'https://clcgh.org/wp-content/uploads/2024/02/bible-3-e1692290438966.jpeg',
    _links: {
      self: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4070',
        },
      ],
      collection: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/comments?post=4070',
        },
      ],
      'version-history': [
        {
          count: 1,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4070/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 4071,
          href: 'https://clcgh.org/wp-json/wp/v2/posts/4070/revisions/4071',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/media/3433',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://clcgh.org/wp-json/wp/v2/media?parent=4070',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/categories?post=4070',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://clcgh.org/wp-json/wp/v2/tags?post=4070',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
];
