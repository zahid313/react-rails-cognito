class CognitoUser
  def initialize(jwt_string = '')
    @jwt_string = jwt_string
    @cognito_jwt_keys = CognitoJwtKeysProvider.keys
  end

  def roles
    parse_token["cognito:groups"]
  end

  def email
    parse_token["email"]
  end

  def username
    parse_token["username"]
  end

  private
  def parse_token
    hdr = jwt_header
    key = @cognito_jwt_keys.get(hdr['kid'], hdr['alg'])
    JSON::JWT.decode(@jwt_string, key)
  end

  def jwt_header
    parts = @jwt_string.split(".")
    unless parts.length == 3
      raise "Not enough parts from JWT: #{@jwt_string}"
    end
    JSON.parse(Base64.decode64(parts[0]))
  end  
end