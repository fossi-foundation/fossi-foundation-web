<!--
404 (Not Found) error page.

This component is used by Nuxt Content in document-driven mode.
-->
<template>
  <FfHeaderText title="Page not found" header="We couldn't find the content you were looking for under this address."/>
  <FfContainer>
    <FfContentLong>
      <FfPara>
        Maybe you can find the content you're looking for using the navigation above.
        Or try to locate it on the old website at
        <FfLink to="https://www-archive.fossi-foundation.org">www-archive.fossi-foundation.org</FfLink>.
      </FfPara>
      <FfPara>
        Please
        <FfLink to="https://github.com/fossi-foundation/fossi-foundation-web/issues">reach out on GitHub</FfLink>
        if you think the content you're looking for, or a redirect, should be
        added to this website.
      </FfPara>
    </FfContentLong>
  </FfContainer>
</template>
