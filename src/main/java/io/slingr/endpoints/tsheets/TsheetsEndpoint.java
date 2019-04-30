package io.slingr.endpoints.tsheets;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.framework.annotations.EndpointProperty;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;

/**
 * <p>Tsheets endpoint
 * <p>
 * <p>Created by hpacini on 05/11/18.
 */
@SlingrEndpoint(name = "tsheets", functionPrefix = "_")
public class TsheetsEndpoint extends HttpEndpoint {

    private static final String TSHEETS_API_URL = "https://rest.tsheets.com/api/v1";

    @EndpointProperty
    private String token;

    public TsheetsEndpoint() {
    }

    @Override
    public String getApiUri() {
        return TSHEETS_API_URL;
    }

    @Override
    public void endpointStarted() {
        httpService().setupBearerAuthenticationHeader(token);
        httpService().setupDefaultHeader("Accept", "application/json");
    }
}
