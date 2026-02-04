

## Fix Broken Images on GitHub Pages Deployment

### Problem Summary
All images are broken on GitHub Pages because image paths don't include the required subdirectory base path.

### Root Cause
- **Vite Config**: Sets `base: "/interactive-portfolio-kate-hansen/"` for production
- **Image Paths**: Use absolute paths like `/lovable-uploads/image.png`
- **Result on GitHub Pages**: Browser requests `https://username.github.io/lovable-uploads/...` instead of `https://username.github.io/interactive-portfolio-kate-hansen/lovable-uploads/...`

### Solution
Move images to `src/assets` and import them as ES6 modules. Vite automatically handles the base path for imported assets.

### Files to Update

#### 1. Copy Images to src/assets
Create `src/assets/images/` folder and copy all required images:
- `stakeholder-input.png` (Analyze step)
- `arcs-framework.png` (Design step)
- `develop-alex.png` (Develop step)
- `implement-survey.png` (Implement step)
- `evaluate-dashboard.png` (Evaluate step)
- Portfolio thumbnails (3 images)

#### 2. Update ProcessTimeline.tsx
- Import images as ES6 modules at the top of the file
- Replace string paths with imported image variables
- This ensures Vite handles the base path correctly during build

```text
// Before
imageNote: '/lovable-uploads/stakeholder-input.png'

// After
import stakeholderInput from '@/assets/images/stakeholder-input.png';
...
imageNote: stakeholderInput
```

#### 3. Update PortfolioGallery.tsx
- Import portfolio thumbnail images as ES6 modules
- Replace string paths with imported image variables

```text
// Before
thumbnail: '/lovable-uploads/1244be3d-f796-4af6-a485-df2795589444.png'

// After
import cybersecurityThumb from '@/assets/images/cybersecurity-thumb.png';
...
thumbnail: cybersecurityThumb
```

### Technical Details

**Why ES6 imports fix this:**
- Vite processes imported assets and automatically prepends the correct base path
- Static string paths in `public/` folder aren't processed by Vite's base path handling
- Imported assets also get content-hashed filenames for better caching

**Files Changed:**
1. `src/assets/images/` - New folder with copied images
2. `src/components/ProcessTimeline.tsx` - ES6 imports for 5 images
3. `src/components/PortfolioGallery.tsx` - ES6 imports for 3 images

### Alternative Quick Fix (if preferred)
Instead of moving to assets, prefix all image paths with `import.meta.env.BASE_URL`:
```text
src={`${import.meta.env.BASE_URL}lovable-uploads/stakeholder-input.png`}
```
This is simpler but slightly more verbose in each component.

