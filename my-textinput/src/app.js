import { LandscapeApp, ui } from 'lumin';
const { 
    UiLinearLayout
  , UiText
  , UiTextEdit
  , Alignment
  , HorizontalTextAlignment
  , EclipseLabelType } = ui;

export class App extends LandscapeApp {
  onAppStart () {
    // Create a new prism that's half a meter cubed.
    const prism = this.requestNewPrism([1.0, 0.5, 0.5]);
    const layout = UiLinearLayout.Create(prism);
    layout.setAlignment(Alignment.CENTER_CENTER);

    const input = UiTextEdit.Create(prism, "", 0.4, 0.05);
    input.setAlignment(Alignment.CENTER_CENTER);
    layout.addItem(input, [0.005, 0.005, 0.005, 0.005]);
    
    const text = UiText.CreateEclipseLabel(prism, "", EclipseLabelType.kT7);
    text.setAlignment(Alignment.CENTER_CENTER);
    layout.addItem(text, [0.005, 0.005, 0.005, 0.005]);

    input.onTextChangedSub(function(uiEventData) {
      text.setText(input.getText());
    });
    prism.getRootNode().addChild(layout);
  }
}
