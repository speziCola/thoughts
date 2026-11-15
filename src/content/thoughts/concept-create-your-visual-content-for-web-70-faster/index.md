---
date: 2022-02-27
description: "With cross-browser support for CSS aspect-ratio now widespread, it's an opportune time to leverage this for your website or product. The goal is to streamline your workflow in producing visuals by reducing the number of assets needed. Why not adopt a size that's easily reusable, whether for your website or social media channels?"
tags:
  - "workflow"
  - "process"
cover: ./assets/hero.png
---

# Concept: Create your visual content for web 70% faster (#3)

![A Facebook cover image template shows the visible cover area, an aspect-ratio crop, and a marked region that may be cut off.](<./assets/hero.png> "Facebook cover crop: A reusable aspect ratio can still hide parts of a platform-specific image.")

## Motivation

With the cross-browser support of CSS's aspect-ratio property now widely available ([Link](<https://twitter.com/addyosmani/status/1468483568166862848?t=a4Za6DD7blCyIKHnzLB4Zw&s=19>)) and the global coverage is quite high ([caniuse](<https://caniuse.com/?search=aspect-ratio>)) it's the perfect time to leverage this feature for your website or product.

The goal is to streamline your daily workflow in creating visuals by reducing the number of assets you need to produce. Why not adopt a size that's easily reusable? This applies whether you're designing for your social media channels or your website.

### Repetitive work
Besides of creating visuals and content for your Website, you also have to check the image specs of your various social media channels:

- Are there new features that need new images, including new sizes?
- How many images do we need to create for a campaign if we want to display it in several social media channels?
- Have the sizes changed?
- Are there new social media platforms that marketing would like to tap into?
- Why am I finding different pixels sizes for the same asset (cover, profile photo)?

Unfortunately other sites are displacing the official guides through googles ads. So these are often used instead. So I uses them as well for my concept of proof. Therefore, it may happen that the resolutions I list in this article are not always correct to the official resolutions. I have added links to the official guide at the end of this post.

![Two social-media image-size guides show different recommended dimensions for online content.](<./assets/image-02.png> "External size guides: Third-party recommendations can vary and change over time.")

### How do other domains approach size and resolution standards?

Several domains have established standards for sizes and resolutions:

- **Web Video Resolutions:** These typically include 240p, 360p, 480p, 720p, 1080p, 1440p, etc. Most of these adhere to aspect ratios like 16:9 or 19:10.
- **TV & Cinema Aspect Ratios**: Common ratios include 3:2, 4:3, 5:4, 16:9, 16:10, 21:9, among others.
- **Photography Aspect Ratios**: These often encompass 4:3, 3:2, 16:9, 5:3, 5:4, 1:1, and so on.
- **Paper Size Ratios**: These follow standards like DIN A6, DIN A5, DIN A4, DIN A3, DIN A2, DIN A1, and for specific needs, there's [US Letter](<https://en.wikipedia.org/wiki/Paper_size#International_paper_sizes>).
- **Web Content Image Sizes**: Currently, these are quite diverse and lack a standardized approach.

---

## Challenge

Develop a standardized image size system to not only reduce overhead but also ensure scalability. This system will allow for the reuse of assets across various marketing campaigns on multiple social media platforms. It will also facilitate expansion to new social platforms. Moreover, with the support of the CSS 'aspect-ratio', it's now even more efficient for website design.
So I tried to collect all image sizes for the following six platforms:

- Facebook
- Instagram
- Twitter
- Linkedin
- Printest
- Youtube

Even though I have not covered all social media platforms, the system aims to work for other platforms as well.

### Collecting image sizes

![A spreadsheet lists image sizes and aspect ratios for several social-media platforms.](<./assets/image-03.png> "Image-size inventory: Collecting platform requirements reveals opportunities to reuse aspect ratios.")

**While collecting the image sizes, it quickly became apparent that quite a few images already follow an aspect ratio.**

So I converted all other sizes into an aspect ratio as well. Of course, some images will now turn out larger than intentional required. So I checked, for each platform, how much will be cut off due to the “incorrect” size.

Even some of the official guidelines cannot guarantee that your visuals will be displayed 100% correctly. Therefore, often previews are provided while uploading images.

![A Facebook design-specification excerpt lists supported image ratios and a minimum resolution.](<./assets/image-04.png> "Facebook specifications: A platform guide defines supported image ratios and resolution.")

So I used the [safe area (television)](<https://en.wikipedia.org/wiki/Paper_size#International_paper_sizes>) method. Which divides the image into a safe (gray) and unsafe (red) area. It basically tells you what your viewers will definitely see and what potentially will be cut off, depending on the TV device they are using. The same method can be applied to web users (mobile, tablet, desktop, etc.) as well.

### Safe area check

![A Facebook cover template distinguishes the visible safe area from portions that may be cropped on different screens.](<./assets/image-05.png> "Safe-area method: The template marks what viewers will see and what may be cropped.")

---

### Facebook

According to external guides, Facebook follows almost no system. So most of the content will be cut off when using an aspect ratio. But still within a reasonable range in my opinion.

![A table compares Facebook image types and original dimensions with a smaller set of reusable aspect ratios.](<./assets/image-06.png> "Facebook ratios: Multiple image specifications can be covered with five aspect ratios.")

Facebook can be covered with five aspect ratios: **1:1, 2:1, 3:1, 9:16, 16:9.**

### Safe area check

![Facebook cover, post, and other image templates show safe and cropped areas at several aspect ratios.](<./assets/image-07.png> "Facebook safe areas: The previews show how the proposed ratios crop different image types.")

As we can see there is not that much content being cut off when using an aspect ratio.

---

### Instagram

![A table compares Instagram image types and resolutions with example aspect ratios.](<./assets/image-08.png> "Instagram ratios: Four aspect ratios cover the image formats collected for the platform.")

Instagram can be reduced to four aspect ratios: **1:1, 2:1, 4:5, 9:16.**

### Safe area check

![Instagram image templates show the visible safe area against portions that may be cropped.](<./assets/image-09.png> "Instagram safe areas: The templates show the crop effects of the proposed ratios.")

---

### Twitter

![A table compares Twitter image types and dimensions with aspect-ratio alternatives.](<./assets/image-10.png> "Twitter ratios: Four aspect ratios cover the image formats collected for the platform.")

Twitter can be covered with four aspect ratios: **1:1, 2:1, 3:1, 16:9.** The same we are already using for Facebook as well - Nice!

### Safe area check

![Twitter image templates show safe areas and crop boundaries for several image formats.](<./assets/image-11.png> "Twitter safe areas: The previews show which portions remain visible at each ratio.")

Images using the same resolution are merged. So you only see two adjustments instead of three.

---

### Linkedin

![A table compares LinkedIn image types and original dimensions with aspect-ratio alternatives.](<./assets/image-12.png> "LinkedIn ratios: Four aspect ratios cover the image formats collected for the platform.")

Linkedin can be covered with four aspect-ratios: **1:1, 2:1, 3:1, 4:1.**

### Safe area check

![LinkedIn image templates show safe areas and crop boundaries for several image formats.](<./assets/image-13.png> "LinkedIn safe areas: The previews show how the aspect-ratio system affects each image.")

---

### Pintrest

![A table compares Pinterest image types and dimensions with aspect-ratio alternatives.](<./assets/image-14.png> "Pinterest ratios: Four aspect ratios cover the image formats collected for the platform.")

Pintrest can be covered with four aspect-ratios: **1:1, 1:2, 2:3, 9:16.**

### Safe area check

![Pinterest image templates show the safe areas and crop boundaries for several formats.](<./assets/image-15.png> "Pinterest safe areas: The previews show how much of each image remains visible.")

---

### Youtube

Youtube didn’t need any adjustments.

![A table compares YouTube image types and resolutions with square and widescreen aspect ratios.](<./assets/image-16.png> "YouTube ratios: The collected formats fit two aspect ratios.")

Youtube can be covered with two aspect-ratios: **1:1, 16:9.**

### Safe area check

![YouTube image templates show safe areas and crop boundaries for square and widescreen formats.](<./assets/image-17.png> "YouTube safe areas: The previews show that the two ratios fit the collected formats.")

---

## Conclusion

Adopting standardized aspect ratios for visual content streamlines your workflow, reduces the number of required assets, and ensures consistency across platforms. This approach simplifies the creation process, saving time and effort while enhancing scalability and adaptability for future platforms.

By focusing on aspect ratios, you can prioritize creativity and strategy over technical details. Always refer to official platform guides for accuracy, but leverage the efficiency and simplicity that aspect ratios offer for faster, high-quality visual content creation.

**At the end it’s up the your team if you still want to go “pixel perfect”. Even so there is no such thing. It will just cause a lot of headache and overhead in my opinion.**

![A matrix shows which of eight aspect ratios are used by Facebook, Instagram, Twitter, LinkedIn, Pinterest, and YouTube.](<./assets/image-18.png> "Cross-platform coverage: Shared aspect ratios can serve multiple social platforms.")

With Facebook coverage, there is only little work left to do for other platforms. Youtube and Twitter are already completely covered for example.

![A resolution table gives example pixel dimensions for common image types and their aspect ratios.](<./assets/image-19.png> "Resolution examples: Apply the reusable ratios to concrete platform image sizes.")

Besides, try to ignore external sources which are trying to tell you the sizes you need. Always go with the platform guide.

### **Official guides:**

- Facebook Page image dimensions: [Link](<https://www.facebook.com/help/125379114252045>)
- Facebook Ads guide: [Link](<https://www.facebook.com/business/ads-guide>)
- Instagram guide: [Link](<https://www.facebook.com/business/ads-guide/image/instagram-feed/traffic>)
- Twitter guide: [Link](<https://help.twitter.com/en>)
- Linkedin guide: [Link](<https://www.linkedin.com/help/linkedin/answer/70781/image-specifications-for-your-linkedin-pages-and-career-pages?lang=en>)
- Pintrest guide: [Link](<https://help.pinterest.com/en/business/article/pinterest-product-specs>)
- Youtube guide: [Link](<https://support.google.com/youtube/answer/2972003?hl=en&co=GENIE.Platform%3DDesktop#zippy=>)
