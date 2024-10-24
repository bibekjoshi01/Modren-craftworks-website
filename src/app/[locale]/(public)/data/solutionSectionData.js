import product_image1 from '../assets/solutionSectionImages/productSolutionImages/image1.png';
import product_image2 from '../assets/solutionSectionImages/productSolutionImages/image2.png';
import product_image3 from '../assets/solutionSectionImages/productSolutionImages/image3.png';

import maintainance_image1 from '../assets/solutionSectionImages/maintainanceSolutionImages/image1.png';
import maintainance_image2 from '../assets/solutionSectionImages/maintainanceSolutionImages/image2.png';
import maintainance_image3 from '../assets/solutionSectionImages/maintainanceSolutionImages/image3.png';

const productSolutionData = [
  {
    id: 1,
    imageSrc: product_image1,
    heading: 'Turnkey Solutions',
    details: `We provide the best, full-service turnkey solution. We deliver innovative facilities that align with our clients' goals`,
  },
  {
    id: 2,
    imageSrc: product_image2,
    heading: 'Laboratories',
    details: `We specialize in TURNKEY organization that provides a single point of contact for the design and delivery of your laboratory.`,
  },
  {
    id: 3,
    imageSrc: product_image3,
    heading: 'Clean Room',
    details: `We offer leading turnkey solutions for cleanroom design, construction, and installation.`,
  },
];

const maintainanceSolutionData = [
  {
    id: 1,
    imageSrc: maintainance_image1,
    heading: 'Maintenance',
  },
  {
    id: 2,
    imageSrc: maintainance_image2,
    heading: 'Calibration',
  },
  {
    id: 3,
    imageSrc: maintainance_image3,
    heading: 'Testing',
  },
];

export { productSolutionData, maintainanceSolutionData };
