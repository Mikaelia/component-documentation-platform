module.exports = /* eslint-disable */ [{"name":"Button","description":"Button","props":{"accent":{"type":{"name":"bool"},"required":false,"description":"Set button to primary color","defaultValue":{"value":"false","computed":false}},"children":{"type":{"name":"node"},"required":false,"description":""},"className":{"type":{"name":"string"},"required":false,"description":"","defaultValue":{"value":"\"\"","computed":false}},"flat":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}},"round":{"type":{"name":"bool"},"required":false,"description":"Creates circular floated button","defaultValue":{"value":"false","computed":false}},"href":{"type":{"name":"string"},"required":false,"description":"Link to add to button"},"icon":{"type":{"name":"union","value":[{"name":"string"},{"name":"element"}]},"required":false,"description":"Adds icon to button (MaterialUI)"},"inverse":{"type":{"name":"bool"},"required":false,"description":""},"label":{"type":{"name":"string"},"required":false,"description":""},"mini":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}},"neutral":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"true","computed":false}},"onMouseLeave":{"type":{"name":"func"},"required":false,"description":"Function to run on mouse leave"},"onMouseUp":{"type":{"name":"func"},"required":false,"description":"Function to run on mouse up"},"primary":{"type":{"name":"bool"},"required":false,"description":"Set button to primary color","defaultValue":{"value":"false","computed":false}},"raised":{"type":{"name":"bool"},"required":false,"description":"Creates rectangular floated button","defaultValue":{"value":"false","computed":false}},"theme":{"type":{"name":"shape","value":{"accent":{"name":"string","required":false},"button":{"name":"string","required":false},"flat":{"name":"string","required":false},"round":{"name":"string","required":false},"icon":{"name":"string","required":false},"inverse":{"name":"string","required":false},"mini":{"name":"string","required":false},"neutral":{"name":"string","required":false},"primary":{"name":"string","required":false},"raised":{"name":"string","required":false},"toggle":{"name":"string","required":false}}},"required":false,"description":""},"type":{"type":{"name":"string"},"required":false,"description":"","defaultValue":{"value":"\"button\"","computed":false}}},"code":"import React, { Component } from \"react\";\nimport PropTypes from \"prop-types\";\nimport classnames from \"classnames\";\nimport FontIcon from \"../FontIcon/FontIcon\";\n\n/** Button */\nclass Button extends Component {\n  getLevel = () => {\n    if (this.props.primary) return \"primary\";\n    if (this.props.accent) return \"accent\";\n    return \"neutral\";\n  };\n\n  getShape = () => {\n    if (this.props.raised) return \"raised\";\n    if (this.props.round) return \"round\";\n    return \"flat\";\n  };\n\n  handleMouseUp = event => {\n    this.buttonNode.blur();\n    if (this.props.onMouseUp) this.props.onMouseUp(event);\n  };\n\n  handleMouseLeave = event => {\n    this.buttonNode.blur();\n    if (this.props.onMouseLeave) this.props.onMouseLeave(event);\n  };\n\n  render() {\n    const {\n      accent, // eslint-disable-line\n      children,\n      className,\n      flat, // eslint-disable-line\n      round, // eslint-disable-line\n      href,\n      icon,\n      inverse,\n      label,\n      mini,\n      neutral,\n      primary, // eslint-disable-line\n      raised, // eslint-disable-line\n      theme,\n      type,\n      ...others\n    } = this.props;\n    const Element = href ? \"a\" : \"button\";\n    const level = this.getLevel();\n    const shape = this.getShape();\n    const mouseEvents = {\n      onMouseUp: this.handleMouseUp,\n      onMouseLeave: this.handleMouseLeave\n    };\n\n    const classes = classnames(\n      theme.button,\n      [theme[shape]],\n      {\n        [theme[level]]: neutral,\n        [theme.mini]: mini,\n        [theme.inverse]: inverse\n      },\n      className\n    );\n\n    const props = {\n      ...others,\n      ...mouseEvents,\n      href,\n      ref: node => {\n        this.buttonNode = node;\n      },\n      className: classes,\n      disabled: this.props.disabled,\n      type: !href ? type : null,\n      data: \"button\"\n    };\n\n    return (\n      <Element props={props} className={classes}>\n        {icon && <FontIcon className={theme.icon} value={icon} />}\n        {label}\n        {children}\n      </Element>\n    );\n  }\n}\n\nButton.propTypes = {\n  /** Set button to primary color */\n  accent: PropTypes.bool,\n  children: PropTypes.node,\n  className: PropTypes.string,\n  flat: PropTypes.bool,\n  /** Creates circular floated button*/\n  round: PropTypes.bool,\n  /** Link to add to button */\n  href: PropTypes.string,\n  /** Adds icon to button (MaterialUI) */\n  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),\n  inverse: PropTypes.bool,\n  label: PropTypes.string,\n  mini: PropTypes.bool,\n  neutral: PropTypes.bool,\n  /** Function to run on mouse leave */\n  onMouseLeave: PropTypes.func,\n  /** Function to run on mouse up */\n  onMouseUp: PropTypes.func,\n  /** Set button to primary color */\n  primary: PropTypes.bool,\n  /** Creates rectangular floated button */\n  raised: PropTypes.bool,\n  theme: PropTypes.shape({\n    accent: PropTypes.string,\n    button: PropTypes.string,\n    flat: PropTypes.string,\n    round: PropTypes.string,\n    icon: PropTypes.string,\n    inverse: PropTypes.string,\n    mini: PropTypes.string,\n    neutral: PropTypes.string,\n    primary: PropTypes.string,\n    raised: PropTypes.string,\n    toggle: PropTypes.string\n  }),\n  type: PropTypes.string\n};\n\nButton.defaultProps = {\n  accent: false,\n  className: \"\",\n  flat: false,\n  round: false,\n  mini: false,\n  neutral: true,\n  primary: false,\n  raised: false,\n  type: \"button\"\n};\n// allows export without styles\nexport default Button;\n","examples":[{"name":"Example","description":"","code":"import React from \"react\";\nimport Button from \"component-library/lib/Button\";\n\nexport default function Example() {\n  return (\n    <div>\n      <Button icon=\"check\" label=\"I'm a button\" raised accent />\n      <br />\n      <Button label=\"I'm a button\" raised primary />\n      <br />\n      <Button icon=\"add\" round mini accent />\n    </div>\n  );\n}\n"}]},{"name":"EyeIcon","description":"SVG Eye Icon","code":"import React from \"react\";\n\n/** SVG Eye Icon */\nfunction EyeIcon() {\n  // Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg\n  return (\n    <svg\n      width=\"16\"\n      height=\"16\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 22 22\"\n    >\n      <g transform=\"matrix(.02146 0 0 .02146 1 1)\" fill=\"#4d4d4d\">\n        <path d=\"m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1\" />\n        <circle cx=\"466.08\" cy=\"466.02\" r=\"134.5\" />\n      </g>\n    </svg>\n  );\n}\n\nexport default EyeIcon;\n","examples":[{"name":"Example","description":"","code":"import React from \"react\";\nimport EyeIcon from \"component-library/lib/EyeIcon\";\n\nexport default function Example() {\n  return <EyeIcon />;\n}\n"}]},{"name":"FontIcon","description":"","props":{"alt":{"type":{"name":"string"},"required":false,"description":"","defaultValue":{"value":"\"\"","computed":false}},"children":{"type":{"name":"node"},"required":false,"description":""},"className":{"type":{"name":"string"},"required":false,"description":"","defaultValue":{"value":"\"\"","computed":false}},"theme":{"type":{"name":"object"},"required":false,"description":""},"value":{"type":{"name":"union","value":[{"name":"string"},{"name":"element"}]},"required":false,"description":""}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\nimport classnames from \"classnames\";\n\nconst FontIcon = (\n  { alt, children, className, theme, value, ...other } // eslint-disable-line\n) => (\n  <span\n    data=\"font-icon\"\n    aria-label={alt}\n    className={classnames(\n      {\n        \"material-icons\":\n          typeof value === \"string\" || typeof children === \"string\"\n      },\n      className\n    )}\n    {...other}\n  >\n    {value}\n    {children}\n  </span>\n);\n\nFontIcon.propTypes = {\n  alt: PropTypes.string,\n  children: PropTypes.node,\n  className: PropTypes.string,\n  theme: PropTypes.object, // eslint-disable-line\n  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element])\n};\n\nFontIcon.defaultProps = {\n  alt: \"\",\n  className: \"\"\n};\n\nexport default FontIcon;\n","examples":[]},{"name":"HelloWorld","description":"A super lame component that says Hello with a custom message.","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"\"World\"","computed":false}}},"code":"import React from \"react\";\nimport { PropTypes } from \"prop-types\";\n\n/** A super lame component that says Hello with a custom message. */\nfunction HelloWorld({ message }) {\n  return <div>Hello {message}</div>;\n}\n\nHelloWorld.propTypes = {\n  /** Message to display */\n  message: PropTypes.string\n};\n\nHelloWorld.defaultProps = {\n  message: \"World\"\n};\n\nexport default HelloWorld;\n","examples":[{"name":"ExampleHelloWorld","description":"Custom message","code":"import React from \"react\";\nimport HelloWorld from \"component-library/lib/HelloWorld\";\n\n/** Custom message */\nexport default function ExampleHelloWorld() {\n  return <HelloWorld message=\"Mikaela!\" />;\n}\n"}]},{"name":"Label","description":"Label with required field display, htmlFor, and block styling","props":{"htmlFor":{"type":{"name":"string"},"required":true,"description":"HTML ID for associated input"},"label":{"type":{"name":"string"},"required":true,"description":"Label text"},"required":{"type":{"name":"bool"},"required":false,"description":"Display asterisk after label if true"}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\n\n/** Label with required field display, htmlFor, and block styling */\nfunction Label({ htmlFor, label, required }) {\n  return (\n    <label style={{ display: \"block\" }} htmlFor={htmlFor}>\n      {label} {required && <span style={{ color: \"red\" }}> *</span>}\n    </label>\n  );\n}\n\nLabel.propTypes = {\n  /** HTML ID for associated input */\n  htmlFor: PropTypes.string.isRequired,\n\n  /** Label text */\n  label: PropTypes.string.isRequired,\n\n  /** Display asterisk after label if true */\n  required: PropTypes.bool\n};\n\nexport default Label;\n","examples":[{"name":"ExampleOptional","description":"Optional label","code":"import React from \"react\";\nimport Label from \"component-library/lib/Label\";\n\n/** Optional label */\nexport default function ExampleOptionalLabel() {\n  return <Label htmlFor=\"test\" label=\"test\" />;\n}\n"},{"name":"ExampleRequired","description":"Optional label","code":"import React from \"react\";\nimport Label from \"component-library/lib/Label\";\n\n/** Optional label */\nexport default function ExampleRequired() {\n  return <Label htmlFor=\"test\" label=\"test\" required />;\n}\n"}]},{"name":"PasswordInput","description":"Password input with integrated label, quality tips, and show password toggle.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used by convention."},"value":{"type":{"name":"any"},"required":false,"description":"Password value"},"label":{"type":{"name":"string"},"required":false,"description":"Input label","defaultValue":{"value":"\"Password\"","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function called when password input value changes"},"maxLength":{"type":{"name":"number"},"required":false,"description":"Max password length accepted","defaultValue":{"value":"50","computed":false}},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder displayed when no password is entered"},"showVisibilityToggle":{"type":{"name":"bool"},"required":false,"description":"Set to true to show the toggle for displaying the currently entered password","defaultValue":{"value":"false","computed":false}},"quality":{"type":{"name":"number"},"required":false,"description":"Display password quality visually via ProgressBar, accepts a number between 0 and 100"},"error":{"type":{"name":"string"},"required":false,"description":"Validation error to display"}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\nimport ProgressBar from \"../ProgressBar\";\nimport EyeIcon from \"../EyeIcon\";\nimport TextInput from \"../TextInput\";\n\n/** Password input with integrated label, quality tips, and show password toggle. */\nclass PasswordInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      showPassword: false\n    };\n  }\n\n  toggleShowPassword = event => {\n    this.setState(prevState => {\n      return { showPassword: !prevState.showPassword };\n    });\n    if (event) event.preventDefault();\n  };\n\n  render() {\n    const {\n      htmlId,\n      value,\n      label,\n      error,\n      onChange,\n      placeholder,\n      maxLength,\n      showVisibilityToggle,\n      quality,\n      ...props\n    } = this.props;\n    const { showPassword } = this.state;\n\n    return (\n      <TextInput\n        htmlId={htmlId}\n        label={label}\n        placeholder={placeholder}\n        type={showPassword ? \"text\" : \"password\"}\n        onChange={onChange}\n        value={value}\n        maxLength={maxLength}\n        error={error}\n        required\n        {...props}\n      >\n        {showVisibilityToggle && (\n          <a\n            href=\"\"\n            onClick={this.toggleShowPassword}\n            style={{ marginLeft: 5 }}\n          >\n            <EyeIcon />\n          </a>\n        )}\n        {value.length > 0 && quality && (\n          <ProgressBar percent={quality} width={130} />\n        )}\n      </TextInput>\n    );\n  }\n}\n\nPasswordInput.propTypes = {\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n  htmlId: PropTypes.string.isRequired,\n\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/\n  name: PropTypes.string.isRequired,\n\n  /** Password value */\n  value: PropTypes.any,\n\n  /** Input label */\n  label: PropTypes.string,\n\n  /** Function called when password input value changes */\n  onChange: PropTypes.func.isRequired,\n\n  /** Max password length accepted */\n  maxLength: PropTypes.number,\n\n  /** Placeholder displayed when no password is entered */\n  placeholder: PropTypes.string,\n\n  /** Set to true to show the toggle for displaying the currently entered password */\n  showVisibilityToggle: PropTypes.bool,\n\n  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */\n  quality: PropTypes.number,\n\n  /** Validation error to display */\n  error: PropTypes.string\n};\n\nPasswordInput.defaultProps = {\n  maxLength: 50,\n  showVisibilityToggle: false,\n  label: \"Password\"\n};\n\nexport default PasswordInput;\n","examples":[{"name":"ExampleAllFeatures","description":"All features enabled","code":"import React from \"react\";\nimport PasswordInput from \"component-library/lib/PasswordInput\";\n\n/** All features enabled */\nclass ExampleAllFeatures extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      password: \"\"\n    };\n  }\n\n  getQuality() {\n    const length = this.state.password.length;\n    return length > 10 ? 100 : length * 10;\n  }\n\n  render() {\n    return (\n      <div>\n        <PasswordInput\n          htmlId=\"password-input-example-all-features\"\n          name=\"password\"\n          onChange={event => this.setState({ password: event.target.value })}\n          value={this.state.password}\n          minLength={8}\n          placeholder=\"Enter password\"\n          showVisibilityToggle\n          quality={this.getQuality()}\n          {...this.props}\n        />\n      </div>\n    );\n  }\n}\n\nexport default ExampleAllFeatures;\n"}]},{"name":"ProgressBar","description":"","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed"},"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\n\nclass ProgressBar extends React.Component {\n  getColor = percent => {\n    if (this.props.percent === 100) return \"green\";\n    return this.props.percent > 50 ? \"lightgreen\" : \"red\";\n  };\n\n  getWidthAsPercentOfTotalWidth = () => {\n    return parseInt(this.props.width * (this.props.percent / 100), 10);\n  };\n\n  render() {\n    const { percent, width, height } = this.props;\n    return (\n      <div\n        style={{\n          border: \"solid 1px lightgray\",\n          borderRadius: \".2rem\",\n          width: width\n        }}\n      >\n        <div\n          style={{\n            width: this.getWidthAsPercentOfTotalWidth(),\n            height,\n            backgroundColor: this.getColor(percent)\n          }}\n        />\n      </div>\n    );\n  }\n}\n\nProgressBar.propTypes = {\n  /** Percent of progress completed */\n  percent: PropTypes.number.isRequired,\n\n  /** Bar width */\n  width: PropTypes.number.isRequired,\n\n  /** Bar height */\n  height: PropTypes.number\n};\n\nProgressBar.defaultProps = {\n  height: 5\n};\n\nexport default ProgressBar;\n","examples":[{"name":"Example100Percent","description":"100% progress and height 20px","code":"import React from \"react\";\nimport ProgressBar from \"component-library/lib/ProgressBar\";\n\n/** 100% progress and height 20px*/\nexport default function Example100Percent() {\n  return <ProgressBar percent={100} width={150} height={20} />;\n}\n"},{"name":"Example10Percent","description":"10% progress","code":"import React from \"react\";\nimport ProgressBar from \"component-library/lib/ProgressBar\";\n\n/** 10% progress */\nexport default function Example10Percent() {\n  return <ProgressBar percent={10} width={150} />;\n}\n"},{"name":"Example70Percent","description":"70% progress","code":"import React from \"react\";\nimport ProgressBar from \"component-library/lib/ProgressBar\";\n\n/** 70% progress */\nexport default function Example70Percent() {\n  return <ProgressBar percent={70} width={150} />;\n}\n"}]},{"name":"RegistrationForm","description":"Registration form with built-in validation.","props":{"confirmationMessage":{"type":{"name":"string"},"required":false,"description":"Message displayed upon successful submission","defaultValue":{"value":"\"Thanks for registering!\"","computed":false}},"onSubmit":{"type":{"name":"func"},"required":true,"description":"Called when form is submitted"},"minPasswordLength":{"type":{"name":"number"},"required":false,"description":"Minimum password length","defaultValue":{"value":"8","computed":false}}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\nimport TextInput from \"../TextInput\";\nimport PasswordInput from \"../PasswordInput\";\n\n/** Registration form with built-in validation. */\nclass RegistrationForm extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      user: {\n        email: \"\",\n        password: \"\"\n      },\n      errors: {},\n      submitted: false\n    };\n  }\n\n  onChange = event => {\n    const user = this.state.user;\n    user[event.target.name] = event.target.value;\n    this.setState({ user });\n  };\n\n  // Returns a number from 0 to 100 that represents password quality.\n  // For simplicity, just returning % of min length entered.\n  // Could enhance with checks for number, special char, unique characters, etc.\n  passwordQuality(password) {\n    if (!password) return null;\n    if (password.length >= this.props.minPasswordLength) return 100;\n    const percentOfMinLength = parseInt(\n      (password.length / this.props.minPasswordLength) * 100,\n      10\n    );\n    return percentOfMinLength;\n  }\n\n  validate({ email, password }) {\n    const errors = {};\n    const { minPasswordLength } = this.props;\n\n    if (!email) errors.email = \"Email required.\";\n    if (password.length < minPasswordLength)\n      errors.password = `Password must be at least ${minPasswordLength} characters.`;\n\n    this.setState({ errors });\n    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;\n    return formIsValid;\n  }\n\n  onSubmit = () => {\n    const { user } = this.state;\n    const formIsValid = this.validate(user);\n    if (formIsValid) {\n      this.props.onSubmit(user);\n      this.setState({ submitted: true });\n    }\n  };\n\n  render() {\n    const { errors, submitted } = this.state;\n    const { email, password } = this.state.user;\n\n    return submitted ? (\n      <h2>{this.props.confirmationMessage}</h2>\n    ) : (\n      <div>\n        <TextInput\n          htmlId=\"registration-form-email\"\n          name=\"email\"\n          onChange={this.onChange}\n          label=\"Email\"\n          value={email}\n          error={errors.email}\n          required\n        />\n\n        <PasswordInput\n          htmlId=\"registration-form-password\"\n          name=\"password\"\n          value={password}\n          onChange={this.onChange}\n          quality={this.passwordQuality(password)}\n          showVisibilityToggle\n          maxLength={50}\n          error={errors.password}\n        />\n\n        <input type=\"submit\" value=\"Register\" onClick={this.onSubmit} />\n      </div>\n    );\n  }\n}\n\nRegistrationForm.propTypes = {\n  /** Message displayed upon successful submission */\n  confirmationMessage: PropTypes.string,\n\n  /** Called when form is submitted */\n  onSubmit: PropTypes.func.isRequired,\n\n  /** Minimum password length */\n  minPasswordLength: PropTypes.number\n};\n\nRegistrationForm.defaultProps = {\n  confirmationMessage: \"Thanks for registering!\",\n  minPasswordLength: 8\n};\n\nexport default RegistrationForm;\n","examples":[{"name":"ExampleRegistration","description":"","code":"import React from \"react\";\nimport RegistrationForm from \"component-library/lib/RegistrationForm\";\n\nexport default class ExampleRegistrationForm extends React.Component {\n  onSubmit = user => {\n    console.log(user);\n  };\n\n  render() {\n    return <RegistrationForm onSubmit={this.onSubmit} />;\n  }\n}\n"}]},{"name":"TextInput","description":"Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used."},"label":{"type":{"name":"string"},"required":true,"description":"Input label"},"type":{"type":{"name":"enum","value":[{"value":"\"text\"","computed":false},{"value":"\"number\"","computed":false},{"value":"\"password\"","computed":false}]},"required":false,"description":"Input type","defaultValue":{"value":"\"text\"","computed":false}},"required":{"type":{"name":"bool"},"required":false,"description":"Mark label with asterisk if set to true","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function to call onChange"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder to display when empty"},"value":{"type":{"name":"any"},"required":false,"description":"Value"},"error":{"type":{"name":"string"},"required":false,"description":"String to display when error occurs"},"children":{"type":{"name":"node"},"required":false,"description":"Child component to display next to the input"}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\nimport Label from \"../Label\";\n\n/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */\nfunction TextInput({\n  htmlId,\n  name,\n  label,\n  type = \"text\",\n  required = false,\n  onChange,\n  placeholder,\n  value,\n  error,\n  children,\n  ...props\n}) {\n  return (\n    <div style={{ marginBottom: 16 }}>\n      <Label htmlFor={htmlId} label={label} required={required} />\n      <input\n        id={htmlId}\n        type={type}\n        name={name}\n        placeholder={placeholder}\n        value={value}\n        onChange={onChange}\n        style={error && { border: \"solid 1px red\" }}\n        {...props}\n      />\n      {children}\n      {error && (\n        <div className=\"error\" style={{ color: \"red\" }}>\n          {error}\n        </div>\n      )}\n    </div>\n  );\n}\n\nTextInput.propTypes = {\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n  htmlId: PropTypes.string.isRequired,\n\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */\n  name: PropTypes.string.isRequired,\n\n  /** Input label */\n  label: PropTypes.string.isRequired,\n\n  /** Input type */\n  type: PropTypes.oneOf([\"text\", \"number\", \"password\"]),\n\n  /** Mark label with asterisk if set to true */\n  required: PropTypes.bool,\n\n  /** Function to call onChange */\n  onChange: PropTypes.func.isRequired,\n\n  /** Placeholder to display when empty */\n  placeholder: PropTypes.string,\n\n  /** Value */\n  value: PropTypes.any,\n\n  /** String to display when error occurs */\n  error: PropTypes.string,\n\n  /** Child component to display next to the input */\n  children: PropTypes.node\n};\n\nexport default TextInput;\n","examples":[{"name":"ExampleError","description":"Error TextBox","code":"import React from \"react\";\nimport TextInput from \"component-library/lib/TextInput\";\n\n/** Error TextBox */\nexport default class ExampleError extends React.Component {\n  render() {\n    return (\n      <TextInput\n        htmlId=\"example-error\"\n        label=\"First Name\"\n        name=\"firstname\"\n        onChange={() => {}}\n        required\n        error=\"First name is required\"\n      />\n    );\n  }\n}\n"},{"name":"ExampleOptional","description":"Optional TextBox","code":"import React from \"react\";\nimport TextInput from \"component-library/lib/TextInput\";\n\n/** Optional TextBox */\nexport default class ExampleOptional extends React.Component {\n  render() {\n    return (\n      <TextInput\n        htmlId=\"example-optional\"\n        label=\"First Name\"\n        name=\"firstname\"\n        onChange={() => {}}\n      />\n    );\n  }\n}\n"}]},{"name":"TextInputBEM","description":"Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used."},"label":{"type":{"name":"string"},"required":true,"description":"Input label"},"type":{"type":{"name":"enum","value":[{"value":"\"text\"","computed":false},{"value":"\"number\"","computed":false},{"value":"\"password\"","computed":false}]},"required":false,"description":"Input type","defaultValue":{"value":"\"text\"","computed":false}},"required":{"type":{"name":"bool"},"required":false,"description":"Mark label with asterisk if set to true","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function to call onChange"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder to display when empty"},"value":{"type":{"name":"any"},"required":false,"description":"Value"},"error":{"type":{"name":"string"},"required":false,"description":"String to display when error occurs"},"children":{"type":{"name":"node"},"required":false,"description":"Child component to display next to the input"}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\nimport Label from \"../Label\";\n\n/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */\nfunction TextInputBEM({\n  htmlId,\n  name,\n  label,\n  type = \"text\",\n  required = false,\n  onChange,\n  placeholder,\n  value,\n  error,\n  children,\n  ...props\n}) {\n  return (\n    <div className=\"textinput\">\n      <Label htmlFor={htmlId} label={label} required={required} />\n      <input\n        id={htmlId}\n        type={type}\n        name={name}\n        placeholder={placeholder}\n        value={value}\n        onChange={onChange}\n        className=\"textinput__input--state-error\"\n        {...props}\n      />\n      {children}\n      {error && <div className=\"textinput__error\">{error}</div>}\n    </div>\n  );\n}\n\nTextInputBEM.propTypes = {\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n  htmlId: PropTypes.string.isRequired,\n\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */\n  name: PropTypes.string.isRequired,\n\n  /** Input label */\n  label: PropTypes.string.isRequired,\n\n  /** Input type */\n  type: PropTypes.oneOf([\"text\", \"number\", \"password\"]),\n\n  /** Mark label with asterisk if set to true */\n  required: PropTypes.bool,\n\n  /** Function to call onChange */\n  onChange: PropTypes.func.isRequired,\n\n  /** Placeholder to display when empty */\n  placeholder: PropTypes.string,\n\n  /** Value */\n  value: PropTypes.any,\n\n  /** String to display when error occurs */\n  error: PropTypes.string,\n\n  /** Child component to display next to the input */\n  children: PropTypes.node\n};\n\nexport default TextInputBEM;\n","examples":[{"name":"ExampleError","description":"Error TextBox","code":"import React from \"react\";\nimport TextInput from \"component-library/lib/TextInputBEM\";\n\n/** Error TextBox */\nexport default class ExampleErrorBEM extends React.Component {\n  render() {\n    return (\n      <TextInput\n        htmlId=\"example-error\"\n        label=\"First Name\"\n        name=\"firstname\"\n        onChange={() => {}}\n        required\n        error=\"First name is required\"\n      />\n    );\n  }\n}\n"}]}]