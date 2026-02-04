
## Update "View full Analysis" Button Link

### Summary
Change the "View full Analysis" button in the Analyze phase modal to link to the GitHub-hosted PDF instead of the local file path.

### Current State
- **File**: `src/components/ProcessTimeline.tsx`
- **Line 222**: Currently points to `/documents/Needs-Analysis.pdf`
- This local path may not work correctly on GitHub Pages deployment

### Change Required
Update the link from:
```
"/documents/Needs-Analysis.pdf"
```
To:
```
"https://github.com/katrinahansen2018-oss/interactive-portfolio-kate-hansen/blob/main/public/documents/Needs-Analysis.pdf"
```

### Technical Details
The change is a single line edit in the conditional href on line 222. The button text "View full Analysis" remains unchanged.

### Benefits
- The link will work reliably regardless of deployment environment
- Viewers can access the PDF directly from your GitHub repository
- Eliminates dependency on local file paths that may break in subdirectory deployments
