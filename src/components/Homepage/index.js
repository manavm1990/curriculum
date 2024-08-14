import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Current Syllabus",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>Coming Soon! We are working on the current syllabus for the course.</>
    ),
  },
  {
    title: "Current Assignment",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>No assignments are available at the moment. Please check back later.</>
    ),
  },
  {
    title: "Helpful Links",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>Instructor recommended links of external resources for the course.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
