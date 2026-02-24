# course5-csr-vs-ssr

Comparison of Client-Side Rendering (CSR) and Server-Side Rendering (SSR) by building two versions of the same webpage using vanilla HTML, CSS and JavaScript. Created as part of the Hyper Island program.

### 1. Performance

**Loading Speed:**
Since the project is small, both pages load quickly under normal conditions. But when I tested with a simulated Slow 3G connection, the difference became clearer.

- In SSR, as soon as the HTML finishes loading, the content is already visible on the screen. There's no blank page.
- In CSR, the initial HTML loads a bit faster because it's almost empty, but the screen stays completely blank until the JavaScript file finishes downloading and running.

**JS Impact:**
With SSR, the browser just reads the HTML and shows the page without needing JavaScript at all. With CSR, it has to wait for the JavaScript, run all that code, and build the whole page from scratch.

### 2. SEO

**Initial HTML:**
When I check the page source, the SSR version already includes all the article titles, text, and dates directly inside the HTML.
In the CSR version, the body only contains a container element and a script tag. The actual content isn't visible in the HTML until JavaScript runs.

**How Search Engines Interpret the Page:**
Since the content is already written in the HTML in SSR, search engines can read and index it immediately.
In the CSR version, the search engine first sees mostly JavaScript instead of real content. It needs to execute the JavaScript to generate the page content, which takes extra processing and may not always work perfectly.

**Metadata Visibility:**
Both pages have their `<title>` and `<meta>` tags inside the `<head>` section. This means metadata is directly visible to search engines in both SSR and CSR, without needing to run JavaScript.

### 3. User Experience

**Blank Screen vs Immediate Content:**
With SSR, the content is visible almost straight away because it's already in the HTML. With CSR, the user sees a blank page until JavaScript finishes loading and running, which can feel like something is broken, especially on a slow connection.

**Dependency on JavaScript:**
SSR doesn't need JavaScript to show content, so the page works even if JS is disabled. CSR is completely dependent on it. If JavaScript fails or is blocked, the user sees nothing.

**Reliability if JavaScript Fails or is Slow:**
SSR is more reliable in this case. CSR breaks entirely if there's any issue with the script, which is a real problem on slow networks or older devices.

### Conclusion

SSR is generally better for content-heavy pages where SEO and fast initial load matter. CSR makes more sense for interactive apps where the content changes a lot after the page loads. Neither approach is strictly better, as it depends on what the project needs.
