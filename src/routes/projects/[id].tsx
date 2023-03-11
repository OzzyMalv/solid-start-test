import {useParams} from "@solidjs/router";


export default function ProjectId() {
  const params = useParams()
  console.log(params.id)
  return (
    <h1>ProjectId: {decodeURIComponent(params.id)}</h1>
  )
}
