import { forwardRef } from "react";
import { convertToFormatDate } from "../../../../utils/functions";

const ImpresionFactura = forwardRef(function ({ facturaObject }, ref) {
  console.log(facturaObject);

  const factura = `${facturaObject.timbrado.establecimiento}-${facturaObject.timbrado.puntoExpedicion}-${facturaObject.timbrado.numeroDocumento}`;

  return (
    <div ref={ref} className="body-factura">
      <header className="clerfix">
        <h1 className="header-factura">KUDE Factura Electronica</h1>
        <div className="factura-container">
          <div className="clearfix company">
            <div className="title-factura">Datos de la Empresa</div>
            <div>
              <span className="subtitle-factura">
                {facturaObject.emisor.razonSocial}
              </span>
            </div>
            <div>
              <span className="subtitle-factura">RUC:</span>
              <span>{`${facturaObject.emisor.ruc}-${facturaObject.emisor.digitoVerificador}`}</span>
            </div>
            <div>
              <span className="subtitle-factura">Telefono: </span>
              <span>{facturaObject.emisor.telefono}</span>
            </div>
            <div>
              <a href="jcaimen@gmail.com" className="link">
                <span className="subtitle-factura">Email: </span>
                <span>{facturaObject.emisor.email}</span>
              </a>
            </div>
          </div>
          <div className="project">
            <div className="title-factura">Datos de la factura</div>
            <div>
              <span className="subtitle-factura">Fecha Inicio Vigencia:</span>
              <span>{facturaObject.timbrado.fechaTimbrado}</span>
            </div>
            <div>
              <span className="subtitle-factura">Timbrado Nro:</span>
              <span>{facturaObject.timbrado.numeroTimbrado}</span>
            </div>
            <div>
              <span className="subtitle-factura">Tipo Documento:</span>
              <span>Factura Electronica</span>
            </div>
            <div>
              <span className="subtitle-factura">Nro Documento:</span>
              <span>{factura}</span>
            </div>
          </div>
        </div>

        <div className="cliente-container">
          <div className="cliente">
            <div>
              <span className="subtitle-factura">Fecha Emision:</span>
              <span>{convertToFormatDate(facturaObject.fechaEmision)}</span>
            </div>
            <div>
              <span className="subtitle-factura">Condicion:</span>
              <span>{facturaObject.tipoOperacion.tipoOperacion}</span>
              {/* {facturaObject.tipoOperacion.tipoOperacion === "CRÉDITO" && (
                <>
                  <span className="subtitle-factura margin-left">Plazo:</span>
                  <span>{set.rDE.DE.gDtipDE.gCamCond.gPagCred.dPlazoCre}</span>
                </>
              )} */}
            </div>

            <div>
              <span className="subtitle-factura">RUC:</span>
              <span>{rucReceptor}</span>
            </div>
            <div>
              <span className="subtitle-factura">Nombre/Razon Social:</span>
              <span>{set.rDE.DE.gDatGralOpe.gDatRec.dNomRec}</span>
            </div>
          </div>
        </div>
      </header>
      {/* <main>
          <table className="table-factura">
            <thead>
              <tr>
                <th className="service separator">Codigo</th>
                <th className="separator">Cantidad</th>
                <th className="desc separator">Descripcion</th>
                <th className="separator">Pre Unit</th>
                <th className="separator">Exentas</th>
                <th className="separator">5%</th>
                <th className="separator">10%</th>
              </tr>
            </thead>
            <tbody>
              {detalleFactura.map((item) => (
                <tr className="border-detail" key={item.dCodInt}>
                  <td className="service">124564</td>
                  <td className="unit">{item.dCantProSer}</td>
                  <td className="desc">{item.dDesProSer}</td>
                  <td classNameName="total">{`${toPoint(
                    item.gValorItem.dPUniProSer
                  )}`}</td>
                  <td className="total">
                    {item.gCamIVA.dTasaIVA === "0"
                      ? `${toPoint(item.gValorItem.dPUniProSer)}`
                      : "0"}
                  </td>
                  <td className="total">
                    {item.gCamIVA.dTasaIVA === "5"
                      ? `${toPoint(item.gValorItem.dPUniProSer)}`
                      : "0"}
                  </td>
                  <td className="total">
                    {item.gCamIVA.dTasaIVA === "10"
                      ? `${toPoint(item.gValorItem.dPUniProSer)}`
                      : "0"}
                  </td>
                </tr>
              ))}

              <tr>
                <td
                  colspan="4"
                  className="separator"
                  style={{ textAlign: "left" }}
                >
                  SUBTOTAL
                </td>
                <td className="total separator">{`${toPoint(
                  set.rDE.DE.gTotSub.dSubExe
                )}`}</td>
                <td className="total separator">{`${toPoint(
                  set.rDE.DE.gTotSub.dSub5
                )}`}</td>
                <td className="total separator">{`${toPoint(
                  set.rDE.DE.gTotSub.dSub10
                )}`}</td>
              </tr>
              <tr className="border-detail">
                <td
                  colspan="6"
                  className="grand total"
                  style={{ textAlign: "left" }}
                >
                  Total de la Factura
                </td>
                <td className="grand total">{`${toPoint(
                  set.rDE.DE.gTotSub.dTotGralOpe
                )}`}</td>
              </tr>
              <tr>
                <td>SUBTOTAL</td>
                <td colSpan="2" className="total separator">
                  <span className="margin-right ">5%</span>
                  {`${toPoint(set.rDE.DE.gTotSub.dIVA5)}`}
                </td>
                <td className="total separator">
                  <span colSpan="5" className="margin-right">
                    10%
                  </span>
                  {`${toPoint(set.rDE.DE.gTotSub.dIVA10)}`}
                </td>
                <td colSpan="7" className="total separator separator">
                  <span className="margin-right">Total IVA</span>
                  {`${toPoint(set.rDE.DE.gTotSub.dTotIVA)}`}
                </td>
              </tr>
            </tbody>
          </table>
        </main> */}

      {/* <div className="footer-container">
          <div className="container-qr">
            <QRCode
              size={256}
              className="qr"
              value={set.rDE.gCamFuFD.dCarQR}
              viewBox={`0 0 256 256`}
            />
          </div>
          <div>
            <blockquote className="leyenda-qr">
              Consulte la validez de esta Factura Electronica con el numero de
              CDC impreso abajo en https://ekuatia.set.gov.py/consultas
            </blockquote>
            <p className="leyenda-qr">{`CDC: ${set.rDE.DE.$.Id}`}</p>
            <h3 className="leyenda-documento">
              ESTE DOCUMENTO ES UNA REPRESENTACION GRAFICA DE UN DOCUMENTO
              ELECTRÓNICO(XML)
            </h3>
            <p className="sub-leyenda-qr">
              Informacion de interes del facturador electronico emisor
            </p>

            <p className="sub-leyenda-qr">
              Si su documento electrónico presenta algún error, podrá solicitar
              la modificación dentro de las 72 horas siguientes de la emisión de
              éste comprobante
            </p>
          </div>
        </div> */}
    </div>
  );
});

export default ImpresionFactura;
