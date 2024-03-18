import { forwardRef } from "react";
import { convertToFormatDate, toPoint } from "../../../../utils/functions";
import QRCode from "react-qr-code";

const ImpresionFactura = forwardRef(function ({ facturaObject }, ref) {
  const factura = `${facturaObject.timbrado.establecimiento}-${facturaObject.timbrado.puntoExpedicion}-${facturaObject.timbrado.numeroDocumento}`;

  return (
    <div ref={ref}>
      <div className="body-factura">
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
              </div>

              {facturaObject.receptor.ruc && (
                <div>
                  <span className="subtitle-factura">RUC:</span>
                  <span>{`${facturaObject.receptor.ruc}-${facturaObject.receptor.digitoVerificador}`}</span>
                </div>
              )}

              {facturaObject.receptor.numeroDocumento && (
                <div>
                  <span className="subtitle-factura">
                    {facturaObject.receptor.tipoDocumento}:
                  </span>
                  <span>{facturaObject.receptor.numeroDocumento}</span>
                </div>
              )}

              <div>
                <span className="subtitle-factura">Nombre/Razon Social:</span>
                <span>{facturaObject.receptor.razonSocial}</span>
              </div>
            </div>
          </div>
        </header>
        <main>
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
              {facturaObject.detalleFactura.map((item) => (
                <tr className="border-detail" key={item.codigoInterno}>
                  <td className="service">{item.codigoInterno}</td>
                  <td className="unit">{item.cantidad}</td>
                  <td className="desc">{item.descripcion}</td>
                  <td classNameName="total">{`${toPoint(
                    Math.floor(item.precioUnitario)
                  )}`}</td>
                  <td className="total">
                    {item.tasaIva === "0"
                      ? `${toPoint(Math.floor(item.totalOperacionItem))}`
                      : "0"}
                  </td>
                  <td className="total">
                    {item.tasaIva === "5"
                      ? `${toPoint(Math.floor(item.totalOperacionItem))}`
                      : "0"}
                  </td>
                  <td className="total">
                    {item.tasaIva === "10"
                      ? `${toPoint(Math.floor(item.totalOperacionItem))}`
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
                <td className="total separator">{`${
                  !facturaObject.totalDocumento.subtotalExcenta
                    ? "0"
                    : Math.floor(facturaObject.totalDocumento.subtotalExcenta)
                }`}</td>
                <td className="total separator">{`${
                  !facturaObject.totalDocumento.subTotal05
                    ? "0"
                    : toPoint(
                        Math.floor(facturaObject.totalDocumento.subTotal05)
                      )
                }`}</td>
                <td className="total separator">{`${
                  !facturaObject.totalDocumento.subTotal10
                    ? 0
                    : toPoint(
                        Math.floor(facturaObject.totalDocumento.subTotal10)
                      )
                }`}</td>
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
                  Math.floor(facturaObject.totalDocumento.totalNeto)
                )}`}</td>
              </tr>
              <tr>
                <td>SUBTOTAL</td>
                <td colSpan="2" className="total separator">
                  <span className="margin-right ">5%</span>
                  {`${toPoint(Math.floor(facturaObject.totalDocumento.iva05))}`}
                </td>
                <td className="total separator">
                  <span colSpan="5" className="margin-right">
                    10%
                  </span>
                  {`${toPoint(Math.floor(facturaObject.totalDocumento.iva10))}`}
                </td>
                <td colSpan="7" className="total separator separator">
                  <span className="margin-right">Total IVA</span>
                  {`${toPoint(
                    Math.floor(facturaObject.totalDocumento.totalIva)
                  )}`}
                </td>
              </tr>
            </tbody>
          </table>
        </main>

        <div className="footer-container">
          <div className="container-qr">
            <QRCode
              size={256}
              className="qr"
              value={facturaObject.qr}
              viewBox={`0 0 256 256`}
            />
          </div>
          <div>
            <blockquote className="leyenda-qr">
              Consulte la validez de esta Factura Electronica con el numero de
              CDC impreso abajo en https://ekuatia.set.gov.py/consultas
            </blockquote>
            <p className="leyenda-qr">{`CDC: ${facturaObject.CDC}`}</p>
            <h3 className="leyenda-documento">
              ESTE ES UNA COPIA DEL DOCUMENTO ELECTRÓNICO(XML)
            </h3>
            <p className="sub-leyenda-qr">
              Informacion de interes para saber los datos de la factura
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ImpresionFactura;
