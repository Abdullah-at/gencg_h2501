# Day 2

## Week 2 - Three.js

### Generative Computer Graphics – Fall 2025

Week 2 Journal Entry

For the second session I shifted from yesterday's cube explorations to simple black-and-white systems inspired by the pattern references. I sketched a repeating line grid and a flowing wave field, then recreated both with minimal p5.js code. The first sketch is static (great for exporting a single PNG), while the second continuously animates so it can be captured as a short GIF loop.

**Deliverables**
- Two lightweight p5.js studies: one still image pattern and one looping animation for GIF export.
- Focus on structured systems (grid + waves) with randomness for variety and a monochrome palette to emphasize form.

#### Static Line Tiling (image-ready)
{% raw %}
<iframe src="../content/day01/05/lines.html" width="100%" height="550" frameborder="no"></iframe>
{% endraw %}
I set up a 540×540 canvas, split it into 60px tiles, and randomly chose between diagonal cross lines or vertical stripes per cell. Each mouse click reseeds the randomness to quickly iterate different compositions while keeping the overall grid structure intact.

#### Animated Wave Field (GIF-ready)
{% raw %}
<iframe src="../content/day01/05/waves.html" width="100%" height="550" frameborder="no"></iframe>
{% endraw %}
For the looping example, multiple horizontal strokes follow sine + Perlin noise offsets. A shared time variable nudges the wave phase so the pattern drifts smoothly; recording a few seconds produces a seamless monochrome GIF without needing complex geometry.

#### Process Notes
- Sketched the layouts on paper first (grids and parallel curves) to plan repetition and balance.
- Kept code minimal: one setup/draw per sketch, reusable tile and wave helpers, no external assets.
- Avoided cubes to differentiate from Day 1; restricted palette to black/white with thick strokes for clarity.
- Both sketches are iframe-ready from the `content/day01/05` folder so Day 1 files stay untouched.
