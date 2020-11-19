---
layout: project
urltitle:  "Adversarial Monte Carlo Denoising"
title: "Adversarial Monte Carlo Denoising"
categories: computer vision, computer graphics, robotics, machine learning
permalink: /
---

<br>
<div class="row">
  <div class="col-xs-12">
    <center><h2>Adversarial Monte Carlo Denoising with Conditioned Auxiliary Feature Modulation</h2></center>
    <center><p>
      <a href="http://bingxu.tech/">BING XU</a><sup>1</sup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      JUNFEI ZHANG<sup>1</sup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="http://www.cad.zju.edu.cn/home/rwang/">RUI WANG</a><sup>2</sup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://cg.cs.tsinghua.edu.cn/people/~kun/">KUN XU</a><sup>3</sup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="http://www.yongliangyang.net/">YONG-LIANG YANG</a><sup>4</sup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      CHUAN LI<sup>5</sup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      RUI TANG<sup>1</sup>
    </p></center>
    <center><p>
      <sup>1</sup>KooLab, Kujiale, China&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <sup>3</sup>BNRist, Department of Computer Science and Technology, Tsinghua University, China<br />
      <sup>2</sup>State Key Laboratory of CAD & CG, Zhejiang University, China&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <sup>4</sup>University of Bath, UK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <sup>5</sup>Lambda Labs Inc, USA
    </p></center>
  </div>
</div>


<p align="center" class="caption-small">
</p>

<hr>

<div class="row">
  <div class="col-md-12">
    <img src="{{ "/static/img/teaser.jpg" | prepend:site.baseurl }}">
  </div>
</div>


<div class="row" id="abstract">
  <div class="col-xs-12">
    <h2>Abstract</h2>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <p>
       Denoising Monte Carlo rendering with a very low sample rate remains a major challenge in the photo-realistic rendering research. Many previous works, including regression-based and learning-based methods, have been explored to achieve better rendering quality with less computational cost. However, most of these methods rely on handcrafted optimization objectives, which lead to artifacts such as blurs and unfaithful details. In this paper, we present an adversarial approach for denoising Monte Carlo rendering. Our key insight is that generative adversarial networks can help denoiser networks to produce more realistic high-frequency details and global illumination by learning the distribution from a set of high-quality Monte Carlo path tracing images.We also adapt a novel feature modulation method to utilize auxiliary features better, including normal, albedo and depth. Compared to previous state-of-the-art methods, our approach produces a better reconstruction of the Monte Carlo integral from a few samples, performs more robustly at different sample rates, and takes only a second for megapixel images.
    </p>
  </div>
</div><br>


<div class="row" id="paper">
  <div class="col-xs-12">
    <h2>Paper</h2>
  </div>
</div>

<div class="row">
  <div class="col-xs-12" style="margin-top: 3px; color: #666;">
    <p>
      <a href="./static/paper/xuMCGANsa2019.pdf"> Paper </a> | <a href="./static/paper/xuMCGANsa2019_lowres.pdf"> Paper (low res) </a> | <a href="https://drive.google.com/open?id=11wFRRjRTwpPKMKwt8C1VfuNJAaFeKZzO">Supplemental Material </a>
      <br>
      <br>
      @article {xuMCGANsa2019,
      <br>
      author = {Bing Xu and Junfei Zhang and Rui Wang and Kun Xu and Yong-Liang Yang and Chuan Li and Rui Tang},
      <br>
      title = {Adversarial Monte Carlo Denoising with Conditioned Auxiliary Feature},
      <br>
      journal = {ACM Transactions on Graphics (Proceedings of ACM SIGGRAPH Asia 2019)},
      <br>
      year = {2019},
      <br>
      volume = {38},
      <br>
      pages = {224:1--224:12},
      <br>
      number = {6},
      <br>
      }
    </p>
  </div>
</div><br>

<div class="row" id="download">
  <div class="col-xs-12">
    <h2>Code & Dataset</h2>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <p>
      Our code and model weights are released <a href="https://github.com/mcdenoising/AdvMCDenoise">here</a>. The large scale indoor dataset from Kujiale.com is published on both <a href="https://drive.google.com/drive/folders/1KIqIyHKIvIAqPsVARJLrWcvaGzogvObq?usp=sharing">Google cloud drive</a> and <a href= https://pan.baidu.com/s/1p50e0QfKqdnNP3HMv9rvKg/>Badiu cloud drive with code wahy<a>. Please choose cloud drive whichever is more convenient.
    </p>
  </div>
</div><br>

<div class="row" id="viewer">
  <div class="col-xs-12">
    <h2>Interactive Viewer</h2>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <p>
      Use the <a href="interactive_viewer/viewer.html">interactive viewer</a> to inspect the image details of our methods.
    </p>
  </div>
</div><br>


<!-- <div class="row" id="license">
  <div class="col-xs-12">
    <h2>License</h2>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <p>
      The data is released under the <a href="https://drive.google.com/open?id=13ZwWpU_557ZQccwOUJ8H5lvXD7MeZFMa">Structured3D Terms of Use</a>, and the <a href="https://github.com/bertjiazheng/Structured3D">code</a> is released under the MIT license.
    </p>
  </div>
</div><br>

<div class="row" id="people">
  <div class="col-xs-12">
    <h2>People</h2>
  </div>
</div>

<div class="row">
  <div class="col-md-2 col-sm-3 col-xs-6">
    <a href="https://bertjiazheng.github.io/">
      <img class="people-pic" src="{{ "/static/img/people/jia.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="https://bertjiazheng.github.io/">
        Jia Zheng
      </a>
      <h6>ShanghaiTech University</h6>
    </div>
  </div>

  <div class="col-md-2 col-sm-3 col-xs-6">
    <img class="people-pic" src="{{ "/static/img/people/ahui.png" | prepend:site.baseurl }}">
    <div class="people-name">
      Junfei Zhang
      <h6>Kujiale.com</h6>
    </div>
  </div>

  <div class="col-md-2 col-sm-3 col-xs-6">
    <a href="https://www.linkedin.com/in/jing-li-253b26139/?originalSubdomain=cn">
      <img class="people-pic" src="{{ "/static/img/people/jing.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="https://www.linkedin.com/in/jing-li-253b26139/?originalSubdomain=cn">
        Jing Li
      </a>
      <h6>ShanghaiTech University</h6>
    </div>
  </div>

  <div class="col-md-2 col-sm-3 col-xs-6">
    <img class="people-pic" src="{{ "/static/img/people/ati.jpg" | prepend:site.baseurl }}">
    <div class="people-name">
      Rui Tang
      <h6>Kujiale.com</h6>
    </div>
  </div>

  <div class="col-md-2 col-sm-3 col-xs-6">
    <a href="http://sist.shanghaitech.edu.cn/sist_en/2018/0820/c3846a31775/page.htm">
      <img class="people-pic" src="{{ "/static/img/people/shenghua.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="http://sist.shanghaitech.edu.cn/sist_en/2018/0820/c3846a31775/page.htm">Shenghua Gao</a>
      <h6>ShanghaiTech University</h6>
    </div>
  </div>

  <div class="col-md-2 col-sm-3 col-xs-6">
    <a href="https://faculty.ist.psu.edu/zzhou/">
      <img class="people-pic" src="{{ "/static/img/people/zihan.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="https://faculty.ist.psu.edu/zzhou/">Zihan Zhou</a>
      <h6>Penn State University</h6>
    </div>
  </div>
</div><br>

<div class="row">
  <div class="col-xs-12">
    <h2>Acknowledgements</h2>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <p>
      We would like to thank <a href="https://Kujiale.com">Kujiale.com</a> for providing the database of house designs and the rendering engine.
    </p>
  </div>
</div><br> -->

<hr>
