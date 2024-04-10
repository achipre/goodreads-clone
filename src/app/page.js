export default function Home() {
  const data = [{
    Title: 'The 3 best practice  in the Sales perspective',
    Pagraph: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    Image: '/book-1.webp',
    Author: 'Alex Walker',
    Date: new Date(),
    Tag: ['book', 'sci-fy'],
    Category: 'Sci-Fy'
  }]
  return (
    <h1>Home</h1>
  )
}
