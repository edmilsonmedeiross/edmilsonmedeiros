import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.sass';

interface ProjectProps {
  proj: {
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    github: string;
    online: string;
  };
}

function ProjectCard(proj: ProjectProps) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>{proj.proj.title}</h1>
        <Link href={`/projects/${proj.proj.slug}`}>
          <Image
            src={proj.proj.thumbnail}
            alt={proj.proj.title}
            width={300}
            height={300}
            quality={100}
          />
        </Link>
        <Link
          href={`/projects/${proj.proj.slug}`}
          className={styles.linkButton}
        >
          Detalhes
        </Link>
      </div>
    </section>
  );
}

export default ProjectCard;
