export default function ({redirect, query}) {
  const url = query.url
  if (!url) {
    return redirect('/')
  }
}
