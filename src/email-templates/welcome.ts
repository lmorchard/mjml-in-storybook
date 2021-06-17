export type TemplateVariables = {
  userName: string;
  productName: string;
};

export function render(mjml: any, variables: TemplateVariables) {
  return mjml`
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>

            <mj-image width="32" height="32" src="https://accounts-static.cdn.mozilla.net/images/16821f55.firefox-logo.svg"></mj-image>

            <mj-divider></mj-divider>

            <mj-text>Welcome, ${variables.userName}! Thank you for signing up for ${variables.productName}</mj-text>

          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `;
}
