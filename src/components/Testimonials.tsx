import React from 'react';
import { Testimonial } from '.';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const Testimonials = (data: TestimonialsProps) => {
  const testimonials = data.testimonial;

  return (
    <div className="p-15">
      <div className="row text-center justify-content-center my-4 mx-8">
        {testimonials.map(({ name, description, url, image, small }, ind) => (
          <Testimonial
            col={small ? 3 : 5}
            key={ind}
            name={name}
            url={url}
            img={image.localFile?.childImageSharp}
            description={<MDXRenderer>{description.childMdx.body}</MDXRenderer>}
            rounded={small}
          />
        ))}
      </div>
    </div>
  );
};
