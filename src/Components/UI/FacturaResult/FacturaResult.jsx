import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import useWindowsDimension from "../../../hook/useWindowsDimension";
import ImpresionFactura from "../ImpresionFactura/ImpresionFactura";
import CustomButton from "../CustomButton/CustomButton";

const FacturaResult = ({ facturaObject }) => {
  const facturaRef = useRef();
  const dimensions = useWindowsDimension();

  const handlePrint = useReactToPrint({
    content: () => facturaRef.current,
    documentTitle: `Factura ${facturaObject?.CDC}`,
  });

  const onNavigateToSet = () => {
    try {
      window.open(facturaObject.qr);
    } catch (err) {
      dispatch({ type: "SHOW", typeComponent: "error", message: err.message });
    }
  };

  let printComponet = (
    <div className="factura_button">
      <CustomButton type="button" onClick={handlePrint}>
        Descargar PDF
      </CustomButton>
      <CustomButton type="button" onClick={onNavigateToSet}>
        SET
      </CustomButton>
    </div>
  );

  if (dimensions.width > 375) {
    return (
      <div className="factura">
        <div className="factura_result">
          {printComponet}
          <ImpresionFactura facturaObject={facturaObject} ref={facturaRef} />
        </div>
      </div>
    );
  }

  if (dimensions.width <= 375) {
    return (
      <div className="factura">
        <div className="factura_result">
          <p className="paragraph">
            La factura fue encontrada, estas acciones se pueden realizar
          </p>
          {printComponet}
          <div style={{ display: "none", visibility: "hidden" }}>
            <ImpresionFactura facturaObject={facturaObject} ref={facturaRef} />
          </div>
        </div>
      </div>
    );
  }
};

export default FacturaResult;
