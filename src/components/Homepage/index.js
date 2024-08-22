import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: <a href="/docs/177/intro">CIS 177</a>,
    Svg: require("@site/static/img/js.svg").default,
    description: (
      <p>
        This course builds upon prerequisite HTML/CSS knowledge. It introduces
        JavaScript Web Development, using modern tooling including CLI,
        Git/GitHub, Markdown, TailwindCSS, VS Code, etc. This course is 💯
        online in the Spring and in-person in the Fall.
      </p>
    ),
  },
  {
    title: <a href="/docs/277/intro">CIS 277</a>,
    Svg: require("@site/static/img/react.svg").default,
    description: (
      <p>
        This course builds upon prerequisite JavaScript knowledge. It introduces
        React Web Development. This course is offered in a hybrid format during
        the Fall only.
      </p>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
