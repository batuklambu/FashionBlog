/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function Article() {
  return (
    <main>
      <section>
        <article>
          <time dateTime="11/12/20">11/12/20</time>
          <h2>On the Street in Brooklyn</h2>
          <img
            className="img"
            src={process.env.PUBLIC_URL + '/image/blog-image-1.jpg'}
            alt="blog-image-1"
          ></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dicta facere omnis rerum? Vitae dolore, hic quaerat maiores dolorum
            rerum enim, sit aut tempore similique aspernatur ipsum, adipisci
            soluta natus.Deserunt dicta facere omnis rerum? Vitae dolore, hic
            quaerat maiores dolorum rerum enim, sit aut tempore similique
            aspernatur ipsum, adipisci soluta natus.
          </p>
          <aside>Continues...</aside>
        </article>

        <article>
          <time dateTime="11/11/20">11/11/20</time>
          <h2>Vintage in Vogue</h2>
          <img
            className="img"
            src={process.env.PUBLIC_URL + '/image/blog-image-2.jpg'}
            alt="blog-image-2"
          ></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dicta facere omnis rerum? Vitae dolore, hic quaerat maiores dolorum
            rerum enim, sit aut tempore similique aspernatur ipsum, adipisci
            soluta natus.Deserunt dicta facere omnis rerum? Vitae dolore, hic
            quaerat maiores dolorum rerum enim, sit aut tempore similique
            aspernatur ipsum, adipisci soluta natus.
          </p>
          <aside>Continues...</aside>
        </article>
      </section>
    </main>
  );
}

export default Article;
