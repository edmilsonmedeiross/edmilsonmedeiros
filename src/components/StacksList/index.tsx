import Image from 'next/image';

import styles from './styles.module.sass';

import stacks from '../../services/stacks';

function Stack() {
  return (
    <main className={styles.container}>
      {stacks.map((stack) => (
        <div key={stack.name} data-aos="fade-up">
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
    </main>
  );
}

export default Stack;
