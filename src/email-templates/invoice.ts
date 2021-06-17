export type TemplateVariables = {
  userName: string;
  paymentAmount: number;
};

export function render(mjml: any, variables: TemplateVariables) {
  return mjml`
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>

            <mj-image width="32" src="https://accounts-static.cdn.mozilla.net/images/16821f55.firefox-logo.svg"></mj-image>

            <mj-divider></mj-divider>

            <mj-text>Hello, ${variables.userName}! You will be charged ${variables.paymentAmount}</mj-text>

          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `;
}
