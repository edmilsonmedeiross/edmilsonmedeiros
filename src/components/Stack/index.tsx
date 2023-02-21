import Image from 'next/image';

import styles from './styles.module.sass';

import stacks from '../../services/stacks';

function Stack() {
  return (
    <div className={styles.container}>
      {stacks.map((stack) => (
        <div key={stack.name}>
          <Image
            src={stack.src}
            alt={stack.alt}
            quality={stack.quality}
            width={stack.width}
            height={stack.height}
          />
          <p>{stack.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Stack;
