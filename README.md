# Adversarial Monte Carlo Denoising with Conditioned Auxiliary Feature Modulation

![Adversarial Monte Carlo Denoising with Conditioned Auxiliary Feature Modulation](http://adversarial.mcdenoising.org/static/img/teaser.jpg)

Denoising Monte Carlo rendering with a very low sample rate remains a major challenge in the photo-realistic rendering research. Many previous works, including regression-based and learning-based methods, have been explored to achieve better rendering quality with less computational cost. However, most of these methods rely on handcrafted optimization objectives, which lead to artifacts such as blurs and unfaithful details. In this paper, we present an adversarial approach for denoising Monte Carlo rendering. Our key insight is that generative adversarial networks can help denoiser networks to produce more realistic high-frequency details and global illumination by learning the distribution from a set of high-quality Monte Carlo path tracing images.We also adapt a novel feature modulation method to utilize auxiliary features better, including normal, albedo and depth. Compared to previous state-of-the-art methods, our approach produces a better reconstruction of the Monte Carlo integral from a few samples, performs more robustly at different sample rates, and takes only a second for megapixel images.

## Paper

[Paper](./static/paper/xuMCGANsa2019.pdf)

[Paper low res](./static/paper/xuMCGANsa2019_lowres.pdf)

[Supplemental Material](./static/paper/xuMCGANsa2019_supplemental.pdf)

## Code and Data

Our code and model weights are released <a href="https://github.com/mcdenoising/AdvMCDenoise">here</a>. The large scale indoor dataset from Kujiale.com is published on both <a href="https://drive.google.com/drive/folders/1KIqIyHKIvIAqPsVARJLrWcvaGzogvObq?usp=sharing">Google cloud drive</a> and <a href="https://pan.baidu.com/s/1p50e0QfKqdnNP3HMv9rvKg">Badiu cloud drive with code "wahy"</a>. Please choose cloud drive whichever is more convenient in your location.
