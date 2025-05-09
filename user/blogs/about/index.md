---
title: About
description: 
published: '2025-03-18T00:00:00.000+08:00'
updated: '2025-03-18T12:00:00.000+08:00'
cover: ./haerin.gif
options:
  - unlisted
coverStyle: 'TOP'
---

<script lang="ts">
  import Youtube from '$lib/components/youtube.svelte'
</script>
<div style="color: #000 !important;">
<!-- About Me Widget with GIF Subwidgets -->
<div class="widget" style="padding: 2em; margin: 1em 0; background: #e9f7fd; border: 2px solid #b3e5fc; border-radius: 10px;">
  <h2 style="margin-top:0;color: #000 !important;">🇹🇼 Hi, I'm Po-Yu!</h2>
  <p>
    I'm Po-Yu, coming to you from Taiwan—a small island packed with delicious local eats and big dreams.
    I love jamming on guitar and piano, geeking out over Jpop (sorry Kpop but shoutout to Kang Haerin, Kim Chaewon, and Kazuha!),
    and tinkering with tech (C++ is practically my mother tongue).
  </p>
  <p>
    This August 2025, I'm headed to New York for Cornell Tech—can't wait for the adventures ahead!
    My other big goals? Catching Justin Bieber live, treating myself to a beautiful luxury acoustic guitar,
    and exploring the breathtaking scenery of Switzerland.
  </p>
  <div style="display: flex; justify-content: space-between; gap: 1em; margin-top: 1em;">
  <!-- GIF Subwidgets Container -->
  <div style="width: 48%; height: 0; padding-bottom: 48%; position: relative; border: 2px solid #b3e5fc; border-radius: 8px; overflow: hidden;">
  <img 
    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTAzN2pncWE4MGwxN2V6OW5pOGE5NWM0d3pnamR4OTNxcTQ4dWRsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j6ooYVKHGVtrDsxev5/giphy.gif" 
    alt="Test GIF"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" 
  />
  </div>

  <div style="width: 48%; height: 0; padding-bottom: 48%; position: relative; border: 2px solid #b3e5fc; border-radius: 8px; overflow: hidden;">
  <img 
    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXUxOGdqeXFiaHBnbXUxY3puY292bmg4amo3eXE3b24xb2tiNXZpeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Nl9dMqCPdrZSVOk9lY/giphy.gif" 
    alt="Test GIF"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" 
  />
  </div>
  </div>
</div>


<!-- Education Widget -->
<div style="padding: 2em; margin: 1em 0; background: #fef9e7; border: 2px solid #f7dc6f; border-radius: 10px;">
  <h2 style="margin-top:0;color: #000 !important;">㊫ Education</h2>
  
  <!-- Education Item: Cornell Tech -->
  <div style="
    margin: 1em 0; 
    padding: 1em; 
    background: #fffde7; 
    border: 1px solid #f7dc6f; 
    border-radius: 8px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  ">
    <!-- Text Content -->
    <div>
      <strong>Cornell Tech</strong><br/>
      <em>(Aug 2025 – May 2026, expected)</em><br/>
      M.Eng. in Computer Science
    </div>
    <!-- Logo (replace with your local file path) -->
    <img 
      src="https://cdn.freebiesupply.com/logos/large/2x/cornell-big-red-3-logo-png-transparent.png" 
      alt="Cornell Tech Logo" 
      style="max-width: 100px; height: auto; border-radius: 6px;"
    />
  </div>

  <!-- Education Item: National Tsing Hua University -->
  <div style="
    margin: 1em 0; 
    padding: 1em; 
    background: #fffde7; 
    border: 1px solid #f7dc6f; 
    border-radius: 8px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  ">
    <!-- Text Content -->
    <div>
      <strong>National Tsing Hua University</strong><br/>
      <em>(Sept 2020 – Jun 2024)</em><br/>
      B.S. in Computer Science
    </div>
    <!-- Logo (replace with your local file path) -->
    <img 
      src="https://i.ibb.co/b5rx6cdM/nthu-logo.jpg" 
      alt="NTHU Logo" 
      style="max-width: 100px; height: auto; border-radius: 6px;"
    />
  </div>
</div>


<!-- Experience Widget -->
<div style="padding: 2em; margin: 1em 0; background: #e8f5e9; border: 2px solid #a5d6a7; border-radius: 10px;">
  <h2 style="margin-top:0;color: #000 !important;">🏇 Experience</h2>
  
  <!-- Experience Item: Academia Sinica -->
  <div style="
    margin: 1em 0; 
    padding: 1em; 
    background: #eafaf1; 
    border: 1px solid #a5d6a7; 
    border-radius: 8px;
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  ">
    <!-- Text Content -->
    <div>
      <strong>Academia Sinica</strong> <em>(Jan 2025 – July 2025)<em/><br/>
      Research Assistant at the Research Center for Information Technology Innovation – diving into digital twin tech and exploring “what-if” scenarios in communication networks.
    </div>
    <!-- Logo (Replace the src with your actual image link or local path) -->
    <img 
      src="https://aassrec.org/wp-content/uploads/2020/06/Academia-Sinica-Logo.png" 
      alt="Academia Sinica Logo" 
      style="max-width: 90px; height: auto; border-radius: 6px;"
    />
  </div>
  
  <!-- Experience Item: Tomofun -->
  <div style="
    margin: 1em 0; 
    padding: 1em; 
    background: #eafaf1; 
    border: 1px solid #a5d6a7; 
    border-radius: 8px;
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  ">
    <!-- Text Content -->
    <div>
      <strong>Tomofun</strong> <em>(Jun 2023 – Dec 2023)</em><br/>
      Software QA Intern at a pet tech startup – testing mobile apps, firmware, and making sure our smart devices are always top-notch.
    </div>
    <!-- Logo (Replace the src with your actual image link or local path) -->
    <img 
      src="https://media.cakeresume.com/image/upload/s--xl6aFWGL--/c_pad,fl_png8,h_400,w_400/v1594890273/ztfrcn5jli33qaw9bpsz.png" 
      alt="Tomofun Logo" 
      style="max-width: 90px; height: auto; border-radius: 6px;"
    />
  </div>
</div>

<!-- Awards & Certificates Widget -->
<div style="padding: 2em; margin: 1em 0; background: #f3e5f5; border: 2px solid #ce93d8; border-radius: 10px;">
  <h2 style="margin-top:0;color: #000 !important;">🏆 Awards & Certificates</h2>
  
  <!-- Award Item: Tsinghua Inter-Cross-Strait Programming Contest -->
  <div style="margin: 1em 0; padding: 1em; background: #fce4fd; border: 1px solid #ce93d8; border-radius: 8px;">
    Tsinghua Inter-Cross-Strait Programming Contest – Honorable Mention (Aug 2024)
  </div>
  
  <!-- Award Item: Annual Coding Challenge for Individuals -->
  <div style="margin: 1em 0; padding: 1em; background: #fce4fd; border: 1px solid #ce93d8; border-radius: 8px;">
    Annual Coding Challenge for Individuals – Bronze Prize (May 2024)
  </div>
  
  <!-- Award Item: Collegiate Programming Examination Expert Level -->
  <div style="margin: 1em 0; padding: 1em; background: #fce4fd; border: 1px solid #ce93d8; border-radius: 8px;">
    Collegiate Programming Examination Expert Level – Top 0.8% of over 2500 participants (May 2024)
  </div>
</div>

<!-- Extracurricular Widget -->
<div style="padding: 2em; margin: 1em 0; background: #fff3e0; border: 2px solid #ffcc80; border-radius: 10px;">
  <h2 style="margin-top:0;color: #000 !important;">🎉 Extracurricular</h2>
  
  <!-- Extracurricular Item: GDSC NYCU -->
  <div style="margin: 1em 0; padding: 1em; background: #fff8e1; border: 1px solid #ffcc80; border-radius: 8px;">
    <strong>Google Developer Student Club NYCU</strong> (Sep 2022 – Jun 2023)<br/>
    Collaborated on a cross-platform app using Flutter for art and cultural enthusiasts.
  </div>
  
  <!-- Extracurricular Item: NTHU Changhua Student Association -->
  <div style="margin: 1em 0; padding: 1em; background: #fff8e1; border: 1px solid #ffcc80; border-radius: 8px;">
    <strong>NTHU Changhua Student Association</strong> (Sept 2021 – Jun 2022)<br/>
    As Vice President, co-hosted events like orientation and Changhua Week, celebrating local culture and community spirit.
  </div>
</div>


<!-- Skills & Languages Widget -->
<div style="padding: 2em; margin: 1em 0; background: #fce4ec; border: 2px solid #f48fb1; border-radius: 10px;">
  <h2 style="margin-top:0; color: #000 !important;">🛠 Skills & Languages</h2>
  
  <!-- Technical Skills -->
  <div style="margin: 1em 0; padding: 1em; background: #fde7f0; border: 1px solid #f48fb1; border-radius: 8px;">
    <strong>Technical:</strong> C/C++, Python, Java, Git, GitHub, Jira, Bitbucket
  </div>
  
  <!-- Language Skills -->
  <div style="margin: 1em 0; padding: 1em; background: #fde7f0; border: 1px solid #f48fb1; border-radius: 8px;">
    <strong>Languages:</strong> Mandarin (native) | English (advanced; IELTS Overall Band 7.5)
  </div>
</div>
<!-- Personal Taste Widget -->
<div style="padding: 2em; margin: 1em 0; background: #e1f5fe; border: 2px solid #81d4fa; border-radius: 10px;">
  <h2 style="margin-top:0;color: #000 !important;">🎶 My GOAT</h2>
  
  <!-- Music Taste -->
  <div style="margin: 1em 0; padding: 1em; background: #e0f7fa; border: 1px solid #81d4fa; border-radius: 8px;">
    <p>When I was little, my mom often played Mandarin pop (which was popular back then) in the car. It was a flourishing era for Chinese-language music, with hugely popular singers like Jay Chou from Taiwan, Fish Leong from Malaysia, and JJ Lin from Singapore. </p>
    <p>But this particular song by the Chinese singer Wanting Qu, released in Canada, is truly amazing. As far as I recall, even kindergarten and lower-grade elementary school teachers loved to play it during breaks and recess.</p>
  </div>
  
  <Youtube id="w0dMz8RBG7g?si=VDg_hMp_1RfZlnMb"/>
</div>
</div>


<!-- Stelve Widget
<div class="stelve-widget" style="padding: 1em; margin-top: 1em; background: #f9f9f9; border-radius: 8px;">
  <p style="font-family: 'Courier New', Courier, monospace;">
    Keep exploring, keep coding, and most importantly, keep enjoying the ride!
  </p>
</div> -->
