import { IRecipe } from '../types/data';
export const Recipe = (props: IRecipe) => (
  <>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </>
)
