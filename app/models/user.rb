class User < ApplicationRecord
    has_many :to_dos, dependent: :destroy
    has_secure_password
    validates :username, uniqueness: true, presence: true 
end
