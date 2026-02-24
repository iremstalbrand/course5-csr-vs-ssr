# course5-csr-vs-ssr

Comparison of Client-Side Rendering (CSR) and Server-Side Rendering (SSR) by building two versions of the same webpage using vanilla HTML, CSS and JavaScript. Created as part of the Hyper Island program.

### 1. Performance

Since the project is small, both pages load quickly under normal conditions. But when I tested with a simulated Slow 3G connection, the difference became clearer.

**SSR:** As soon as the HTML finishes loading, the content is already visible on the screen. There's no blank page. The browser sees `logo.svg` directly in the HTML and starts downloading it immediately. It doesn't need JavaScript to display the main content, it just reads the HTML and shows the page.

**CSR:** The initial HTML loads a bit faster because it's almost empty, but the screen stays completely blank until the JavaScript file finishes downloading and running. The browser doesn't know the logo exists until the JavaScript runs. It has to wait for the JavaScript, run all that code, and build the whole page from scratch.

### 2. SEO

**SSR:** The page source already includes all the article titles, text, and dates directly inside the HTML. Search engines can read and index it immediately.

**CSR:** The body only contains a container element and a script tag. The actual content isn't visible until JavaScript runs, so the search engine first sees mostly JavaScript instead of real content and needs to execute it to generate the page.

Both pages have their `<title>` and `<meta>` tags inside the `<head>` section, so metadata is directly visible to search engines in both cases without needing JavaScript.

### 3. User Experience

**SSR:** The content is visible almost straight away because it's already in the HTML. The page works even if JS is disabled, which makes it more reliable in this case.

**CSR:** The user sees a blank page until JavaScript finishes loading and running, which can feel like something is broken, especially on a slow connection. CSR is dependent on JavaScript, and if it fails or is blocked, the user sees nothing. CSR can also fail if there's any issue with the script, which is a real problem on slow networks or older devices.

### Conclusion

SSR is generally better for content-heavy pages where SEO and fast initial load matter. CSR makes more sense for interactive apps where the content changes a lot after the page loads. Neither approach is strictly better, as it depends on what the project needs.
