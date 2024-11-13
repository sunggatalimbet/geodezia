import { EcologicalPrices } from "./ecological-prices";
import { GeodezicalPrices } from "./geodezical-prices";
import { GeologicalPrices } from "./geological-prices";

export const Prices = () => {
	return (
		<article>
			<EcologicalPrices />
			<GeologicalPrices />
			<GeodezicalPrices />
		</article>
	);
};
